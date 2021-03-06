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
        upvotes = self.votes.select {|v| v.upvote}.size
        downvotes = self.votes.select {|v| v.downvote}.size
        total = upvotes + downvotes

        if upvotes === 0 && downvotes === 0
            0
        else
            ((upvotes.to_f / total.to_f) * 100).round
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
                upvotes: c.votes.select {|v| v.upvote}.size,
                downvotes: c.votes.select {|v| v.downvote}.size
            }
            result << comment_hash
        end
        result
    end

end