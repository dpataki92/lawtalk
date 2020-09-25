class AnswersController < ApplicationController
    def vote
        answer = Answer.find_by(id: params[:id])
        if params[:vote] === "upvote"
            answer.upvotes += 1
            answer.user.upvotes += 1
            answer.save
            answer.user.save
        elsif params[:vote] === "downvote"
            answer.upvotes += 1
            answer.user.upvotes += 1
            answer.save
            answer.user.save
        end
        render json: {answerUpvotes: answer.upvotes.size, answerDownvotes: answer.downvotes.size, message: "You have #{params[:vote]}d this answer." }
    end
end