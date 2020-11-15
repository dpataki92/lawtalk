class ConversationsController < ApplicationController
    
    def index
        render json: {conversations: Conversation.conversations_serializer(current_user)}
    end

    def show
        conversation = Conversation.find_by(id: params[:convId])
        render json: {currentConversation: conversation.messages_serializer}
    end

end