class QuestionsController < ApplicationController
    def index
        questions = Quuestion.all.relevant[0..6]
        render json: QuestionSerializer.new(questions).to_serialized_json 
    end
end