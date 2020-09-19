class QuestionsController < ApplicationController
    def index
        questions = Question.all.recent[0..5]
        render json: {questions: Question.questions_data_for_list(questions)} 
    end
end