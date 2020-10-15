class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def index
      render json: {message: "It's working"}
  end

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    @user = User.new(user_params)
    @user.password = params[:password]
    @user.save
    
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { message: 'failed to create user' }, status: :not_acceptable
    end
  end

  def create_with_omniauth
    @user = User.find_or_create_by(uid: auth['uid']) do |u|
      u.name = auth['info']['name']
      u.email = auth['info']['email']
      u.image = auth['info']['image']
    end
 
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { message: 'failed to create user' }, status: :not_acceptable
    end
  end

  def top_users
    users = User.rank_top_15
    render json: { topUsers: users }, status: :accepted
  end

  def show
    user = User.find_by(id: params[:id])
    render json: {currentProfile: user.profile_hash}, status: :accepted
  end

  def update
    if current_user.update(user_params)
      render json: {message: "You have edited your profile."}
    else
      render json: {message: "Invalid data. Please try again."}
    end
  end
    
  private
  
  def user_params
    params.require(:user).permit(:username, :email, :password, :location, :fields, :avatar, :upvotes, :downvotes)
  end

end