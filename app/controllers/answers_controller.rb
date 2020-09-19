class AnswersController < ApplicationController
    scope :recent, -> { order(created_at: :desc) }
end