class UsersController < ApplicationController
    def index
        render json: {message: "It's working"}
    end
end