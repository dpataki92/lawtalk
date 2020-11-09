class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :answer
    has_many :votes

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

    def self.ranked(comments)
        comments.sort {|a,b| b.vote_ratio <=> a.vote_ratio}
    end
end