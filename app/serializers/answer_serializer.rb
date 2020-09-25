class AnswerSerializer < ActiveModel::Serializer
    def initialize(answer_object)
        @answer = answer_object
    end
      
    def to_serialized_json
        @answer.to_json(:include => {
            :comments => {:only => [:content, :created_at, :user_id]}
        })
    end
end