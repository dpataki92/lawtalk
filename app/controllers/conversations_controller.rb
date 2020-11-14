class ConversationsController < ApplicationController
    
    def index
        render json: {conversations: Conversation.conversations_serizalizer(current_user)}
    end

end