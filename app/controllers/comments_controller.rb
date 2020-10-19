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
        if params[:vote] === "upvote"
            comment.upvotes += 1
            comment.user.upvotes += 1
            comment.save
            comment.user.save
        elsif params[:vote] === "downvote"
            comment.downvotes += 1
            comment.user.downvotes += 1
            comment.save
            comment.user.save
        end
        render json: {commentUpvotes: comment.upvotes, commentDownvotes: comment.downvotes, message: "You have #{params[:vote]}d this comment." }
    end
end