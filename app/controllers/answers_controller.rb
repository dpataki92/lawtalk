class AnswersController < ApplicationController
    def create
        question = Question.find_by(id: params[:postId])
        answer = Answer.create(content: params[:content], user: User.find_by(username: params[:currentUser]), question: question)

        if answer.valid?
            question.answers << answer
            render json: {message: "success"}
        else 
            render json: {message: "failure"}
        end
    end

    def vote
        answer = Answer.find_by(id: params[:id])

        if answer.user === current_user
            render json: {message: "You cannot vote on your own answer."}
        elsif !current_user.votes.find {|v| v.answer === answer} 
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

    def comments
        answer = Answer.find_by(id: params[:id])

        if answer.comments.size === 0
            render json: {empty: true}
        else
            render json: {comments: answer.answer_comments_serializer}
        end
    end

    def destroy
        answer = Answer.find_by(id: params[:id])
        
        if answer.destroy
            render json: {message: "success"}
        else
            render json: {message: "failure"}
        end
    end
end