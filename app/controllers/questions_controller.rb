class QuestionsController < ApplicationController
    def index
        sorted = Question.sorted_questions(params[:field], params[:jurisdiction], params[:searchWord]).recent
        cut_questions = Question.page_cut(sorted, params[:pageNumber])
        render json: {questions: Question.questions_data_for_list(cut_questions)} 
    end
end