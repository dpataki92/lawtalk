class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :answer
    has_many :votes

    def creation_date_in_words
        self.created_at.strftime("%B %d, %Y")
    end

    def vote_ratio
        upvotes = self.votes.select {|v| v.upvote}.size
        downvotes = self.votes.select {|v| v.downvote}.size
        total = upvotes + downvotes
        
        if upvotes === 0 && downvotes === 0
            0
        else
            ((upvotes.to_f / total.to_f) * 100).round
        end
    end

    def self.ranked(comments)
        comments.sort {|a,b| b.vote_ratio <=> a.vote_ratio}
    end
end