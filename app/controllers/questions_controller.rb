class QuestionsController < ApplicationController
    def index
        sorted_and_ordered = Question.ordered_questions(params[:order]).sorted_questions(params[:field], params[:jurisdiction], params[:searchWord])
        cut_questions = Question.page_cut(sorted_and_ordered, params[:pageNumber])
        render json: {questions: Question.questions_data_for_list(cut_questions)} 
    end
end