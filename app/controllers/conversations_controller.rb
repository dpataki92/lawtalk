class ConversationsController < ApplicationController
    
    def index
        render json: {conversations: Conversation.conversations_serizalizer(current_user)}
    end

    def show
        conversation = Conversation.find_by(id: params[:id])
        render json: {messages: conversation.messages_serializer}
    end

end