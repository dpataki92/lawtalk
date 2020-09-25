class QuestionSerializer < ActiveModel::Serializer
    def initialize(question_object)
        @question = question_object
    end
      
      def to_serialized_json
        @question.to_json(:include => {
          :creator => {:only => [:username, :avatar]}
        })
      end
end