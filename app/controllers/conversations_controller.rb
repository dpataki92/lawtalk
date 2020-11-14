class ConversationsController < ApplicationController
    
    def index
        render json: {conversations: current_user.conversations_serizalizer}
    end
    
end