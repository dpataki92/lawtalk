class QuestionsController < ApplicationController
    def index
        questions = Question.all
        sorted_questions = questions.field(params[:field]).jurisdiction(params[:jurisdiction]).search_word(params[:searchWord]).relevant
        cut_questions = Question.page_cut(sorted_questions, params[:pageNumber])
        render json: {questions: Question.questions_data_for_list(cut_questions)} 
    end
end