class ConversationsController < ApplicationController
    def index
        render json: {conversations: Conversation.conversations_serializer(current_user)}
    end

    def show
        conversation = Conversation.find_by(id: params[:convId])
        render json: {currentConversation: conversation.messages_serializer(current_user)}
    end

    def create
        user = User.find_by(id: params[:userId])
        conversation = Conversation.find_or_create_by(author: current_user, receiver: user)

        if conversation && conversation.messages.empty?
            conversation.messages.create(content: "#{current_user.username} has initited a conversation.", user: current_user)
        end

        render json: {message: 'success'}
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