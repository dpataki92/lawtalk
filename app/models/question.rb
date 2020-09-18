class Question < ApplicationRecord
    belongs_to :creator, class_name: 'User'
    has_many :followings
    has_many :followers, through: :followings, source: :user
    has_many :answers
    has_many :comments, through: :answers
    
    scope :recent, -> { order(created_at: :desc) }
    scope :relevant, -> { order('followings_count DESC') }
end