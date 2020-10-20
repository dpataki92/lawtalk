class User < ApplicationRecord
    has_secure_password

    has_many :followings
    has_many :followed_questions, through: :followings, source: :question
    has_many :created_questions, foreign_key: :creator_id, class_name: 'Question'
    has_many :answers
    has_many :comments

    validates :username, uniqueness: { case_sensitive: false }

    def creation_date_in_words
        self.created_at.strftime("%B %d, %Y")
    end

    def vote_diff
        self.upvotes - self.downvotes   
    end

    def self.rank_top_15
        sorted = User.all.sort {|a,b| b.vote_diff <=> a.vote_diff}
        sorted[0..14]
    end

    def vote_ratio
        total = self.upvotes + self.downvotes
        if self.upvotes === 0 && self.downvotes === 0
            "User has no votes"
        else
            "#{((self.upvotes.to_f / total.to_f) * 100).to_i}%"
        end
    end

    def top_rated_answers
        sorted = self.answers.sort {|a,b| b.vote_ratio <=> a.vote_ratio}[0..2].select {|a| a.upvotes > a.downvotes}
        if !sorted[0] || sorted[0].vote_ratio === 0
            ["This user has no rated answers","", ""]
        else
            sorted.collect {|a| a.question.title}
        end
    end

    def profile_hash
        {
            avatar: self.avatar,
            username: self.username,
            location: self.location,
            email: self.email,
            fields: self.fields,
            bio: self.bio,
            answers: self.answers.size,
            comments: self.comments.size,
            createdQuestions: self.created_questions.size,
            voteRatio: self.vote_ratio,
            answer1: self.top_rated_answers[0],
            answer2: self.top_rated_answers[1],
            answer3: self.top_rated_answers[2],
            memberSince: self.creation_date_in_words
        }
    end
    
end