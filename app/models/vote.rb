class Vote < ApplicationRecord
    belongs_to :answer
    belongs_to :comment
    belongs_to :user
end