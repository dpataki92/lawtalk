class ConversationsController < ApplicationController
    
    def index
        render json: {conversations: Conversation.conversations_serializer(current_user)}
    end

    def show
        conversation = Conversation.find_by(id: params[:convId])
        render json: {currentConversation: conversation.messages_serializer(current_user)}
    end

    def add_message
        conversation = Conversation.find_by(id: params[:convId])
        user = User.find_by(id: params[:id])
        if params[:message]
            conversation.messages.create(user: user, content: params[:message])
            render json: {message: "success"}
        else
            render json: {message: "failure"}
        end
    end

end