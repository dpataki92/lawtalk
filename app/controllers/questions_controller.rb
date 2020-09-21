class QuestionsController < ApplicationController
    def index
        questions = []

        if params[:followed] === "true"
            followed_questions = User.find_by(username: params[:username]).followed_questions
            created_questions = User.find_by(username: params[:username]).created_questions
            questions = followed_questions + created_questions
        else
            questions = Question.all
        end

        sorted_and_ordered = questions.ordered_questions(params[:order]).sorted_questions(params[:field], params[:jurisdiction], params[:searchWord])
        cut_questions = questions.page_cut(sorted_and_ordered, params[:pageNumber])
        render json: {questions: Question.questions_data_for_list(cut_questions)} 
    end
end