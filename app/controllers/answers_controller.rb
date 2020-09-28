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
        if params[:vote] === "upvote"
            answer.upvotes += 1
            answer.user.upvotes += 1
            answer.save
            answer.user.save
        elsif params[:vote] === "downvote"
            answer.downvotes += 1
            answer.user.downvotes += 1
            answer.save
            answer.user.save
        end
        render json: {answerUpvotes: answer.upvotes, answerDownvotes: answer.downvotes, message: "You have #{params[:vote]}d this answer." }
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