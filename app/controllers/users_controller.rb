class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def index
      render json: {message: "It's working"}
  end

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def top_users
    users = User.rank_top_15
    render json: { topUsers: users }, status: :accepted
  end
    
  private
  
  def user_params
    params.require(:user).permit(:username, :email, :password, :location, :fields, :avatar, :upvotes, :downvotes)
  end

end