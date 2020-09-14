class User < ApplicationRecord
    has_many :followings
    has_many :followed_questions, through: :followings, source: :question
    has_many :created_questions, foreign_key: :creator_id, class_name: 'Question'
    has_many :answers
    has_many :comments
end