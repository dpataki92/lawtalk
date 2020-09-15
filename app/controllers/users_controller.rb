class UsersController < ApplicationController
    def index
        render json: {message: "It's working"}
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
          render json: { user: UserSerializer.new(@user) }, status: :created
        else
          render json: { error: 'failed to create user' }, status: :not_created
        end
      end
    
      private
      
      def user_params
        params.require(:user).permit(:username, :email, :password, :location, :fields, :avatar, :upvotes, :downvotes)
      end
end