class User < ApplicationRecord
    has_secure_password

    has_many :followings
    has_many :followed_questions, through: :followings, source: :question
    has_many :created_questions, foreign_key: :creator_id, class_name: 'Question'
    has_many :answers
    has_many :comments

    validates :username, uniqueness: { case_sensitive: false }

    def vote_diff
        self.upvotes - self.downvotes   
    end

    def self.rank_top_15
        sorted = User.all.sort {|a,b| b.vote_diff <=> a.vote_diff}
        sorted[0..14]
    end
end