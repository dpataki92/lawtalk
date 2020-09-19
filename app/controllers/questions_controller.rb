class QuestionsController < ApplicationController
    def index
        questions = Quuestion.all.recent[0..6]
        render json: {questions: QuestionSerializer.new(questions).to_serialized_json, lastRespondent: questions.recent.first.user.username, } 
    end
end