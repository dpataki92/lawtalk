class Answer < ApplicationRecord
    has_many :comments
    belongs_to :question
    belongs_to :user

    scope :recent, -> { order(created_at: :desc) }

    def creation_date_in_words
        self.created_at.strftime("%B %d, %Y")
    end

    def vote_ratio
        total = self.upvotes + self.downvotes
        if self.upvotes === 0 && self.downvotes === 0
            0
        else
            ((self.upvotes.to_f / total.to_f) * 100).to_i
        end
    end

    def self.ranked(answers)
        answers.sort {|a,b| b.vote_ratio <=> a.vote_ratio}
    end

end