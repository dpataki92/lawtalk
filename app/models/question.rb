class Question < ApplicationRecord
    belongs_to :creator, class_name: "User", foreign_key: "user_id"
    has_many :users
    has_many :answers
    has_many :comments, through: :answers

end