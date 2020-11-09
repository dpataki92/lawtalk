class Vote < ApplicationRecord
    belongs_to :answer, optional: true
    belongs_to :comment, optional: true
    belongs_to :user
end