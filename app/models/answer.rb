class Answer < ApplicationRecord
    has_many :comments
    belongs_to :question
    belongs_to :user

    scope :recent, -> { order(created_at: :desc) }

    def creation_date_in_words
        self.created_at.strftime("%B %d, %Y")
    end

end