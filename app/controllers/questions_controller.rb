class QuestionsController < ApplicationController
    def index
        questions = []
        if params[:followed] === "true"
            followed = User.find_by(username: params[:username]).followed_questions.sorted_and_ordered(params[:order], params[:field], params[:jurisdiction], params[:searchWord])
            created = User.find_by(username: params[:username]).created_questions.sorted_and_ordered(params[:order], params[:field], params[:jurisdiction], params[:searchWord])
            questions = followed + created
        else
            questions = Question.all.sorted_and_ordered(params[:order], params[:field], params[:jurisdiction], params[:searchWord])
        end
        cut_questions = Question.page_cut(questions, params[:pageNumber])
        render json: {questions: Question.questions_data_for_list(cut_questions)} 
    end

    def create
        user = User.find_by(username: question_params[:username])
        question = Question.create(title: question_params[:title], jurisdiction: question_params[:jurisdiction], field: question_params[:field], content: question_params[:content])
        if question.valid?
            user.created_questions << question
            render json: {message: "success"}
        else
            render json: {messgae: "failure"}
        end
    end

    private
  
    def question_params
      params.require(:question).permit(:title, :jurisdiction, :field, :content, :username)
    end
end