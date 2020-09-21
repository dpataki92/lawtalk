class QuestionsController < ApplicationController
    def index
        questions = []
        byebug
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
end