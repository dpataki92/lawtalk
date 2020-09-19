class Question < ApplicationRecord
    belongs_to :creator, class_name: 'User'
    has_many :followings
    has_many :followers, through: :followings, source: :user
    has_many :answers
    has_many :comments, through: :answers
    
    scope :recent, -> { order(created_at: :desc) }
    scope :relevant, -> { order('followings_count DESC') }

    def creation_date_in_words
        self.created_at.strftime("%B %d, %Y")
    end

    def last_response_data
        last_response = self.answers.recent.first
        if last_response
            last_response_creation_date = last_response.creation_date_in_words
            last_response_user = last_response.user.username
            last_response_user_avatar = last_response.user.avatar
            [last_response_creation_date, last_response_user, last_response_user_avatar]
        else
            ["No reply yet", "-", "default.jpg"]
        end
    end

    def self.questions_data_for_list(questions)
        questions_data_array = []
        questions.each do |q|
            question_data_hash = {
                title: q.title, 
                jurisdiction: q.jurisdiction,
                field: q.field,
                replies: q.answers.size,
                creator: q.creator,
                creationDate: q.last_response_data[0],
                lastRespondent: q.last_response_data[1],
                lastRespondentAvatar: q.last_response_data[2]
            }
           questions_data_array << question_data_hash
        end
        questions_data_array
    end
end