class UserProfileSerializer < ActiveModel::Serializer
    def initialize(users_object)
        @users = users_object
    end
      
    def to_serialized_json
        @users.to_json(:include => {
          :created_questions => {:only => [:title, :created_at]},
          :followed_questions => {:only => [:title, :created_at]},
          :answers => {:only => [:content, :created_at]},
          :comments => {:only => [:content, :created_at]},
        })
    end
end
