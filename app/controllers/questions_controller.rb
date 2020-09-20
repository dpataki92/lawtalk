class QuestionsController < ApplicationController
    def index
        sorted = Question.sorted_questions(params[:field], params[:jurisdiction], params[:searchWord])
        ordered = sorted.ordered_questions(params[:order])
        cut_questions = Question.page_cut(ordered, params[:pageNumber])
        render json: {questions: Question.questions_data_for_list(cut_questions)} 
    end
end