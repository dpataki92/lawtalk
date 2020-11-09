class Answer < ApplicationRecord
    has_many :comments
    belongs_to :question
    belongs_to :user
    has_many :votes

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

    def answer_comments_serializer
        ranked_comments = Comment.ranked(self.comments)
        result = []
        ranked_comments.each do |c|
            comment_hash = {
                commentId: c.id,
                content: c.content,
                commentCreator: c.user.username,
                commentCreatorId: c.user.id,
                creation: c.creation_date_in_words,
                upvotes: c.upvotes,
                downvotes: c.downvotes
            }
            result << comment_hash
        end
        result
    end

end