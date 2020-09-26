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
end