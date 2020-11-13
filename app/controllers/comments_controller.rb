class CommentsController < ApplicationController
    def create
        answer = Answer.find_by(id: params[:postId])
        comment = Comment.create(content: params[:content], user: User.find_by(username: params[:currentUser]), answer: answer)
        if comment.valid?
            answer.comments << comment
            render json: {message: "success"}
        else 
            render json: {message: "failure"}
        end
    end

    def vote
        comment = Comment.find_by(id: params[:id])
        if !current_user.votes.find {|v| v.comment === comment} 
            if params[:vote] === "upvote"
                comment.votes.create(comment: comment, user: current_user, upvote: true)
                comment.user.upvotes += 1
                comment.user.save
            elsif params[:vote] === "downvote"
                comment.votes.create(comment: comment, user: current_user, downvote: true)
                comment.user.downvotes += 1
                comment.user.save
            end
            render json: {commentUpvotes: comment.select{|c| c.upvote}.size, commentDownvotes: comment.select{|c| c.downvote}.size, message: "You have #{params[:vote]}d this comment.", success: true }
        else
            render json: {message: "You have already voted on this comment."}
        end
    end

    def vote
        answer = Answer.find_by(id: params[:id])
        if !current_user.votes.find {|v| v.answer === answer} 
            if params[:vote] === "upvote"
                answer.votes.create(answer: answer, user: current_user, upvote: true)
                answer.user.upvotes += 1
                answer.user.save
            elsif params[:vote] === "downvote"
                answer.votes.create(answer: answer, user: current_user, downvote: true)
                answer.user.downvotes += 1
                answer.user.save
            end
            render json: {answerUpvotes: answer.votes.select{|v| v.upvote}.size, answerDownvotes: answer.votes.select{|v| v.downvote}.size, message: "You have #{params[:vote]}d this answer.", success: true }
        else
            render json: {message: "You have already voted on this answer."}
        end
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        if comment.destroy
            render json: {message: "success"}
        else
            render json: {message: "failure"}
        end
    end
end