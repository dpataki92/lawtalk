class Conversation < ApplicationRecord
    belongs_to :author, class_name: 'User'
    belongs_to :receiver, class_name: 'User'
    has_many :messages, -> { order(created_at: :asc) }, dependent: :destroy

    validates :author, uniqueness: {scope: :receiver}

    def self.conversations_serializer(user)
        result = []
        
        conversations = (user.authored_conversations + user.received_conversations).sort {|a,b| b.messages.last.updated_at <=> a.messages.last.updated_at}

        conversations.each do |c|
            chatPartner = c.author === user ? c.receiver : c.author
            result.push({
                id: c.id,
                lastMessageDate: Date::ABBR_MONTHNAMES[c.updated_at.month] + " " + c.updated_at.day.to_s,
                lastMessage: c.messages.sort {|a,b| b.created_at <=> a.created_at}[0].content[0..77],
                chatPartner: chatPartner.username,
                chatPartnerAvatar: chatPartner.avatar
            })
        end

        result
    end

    def messages_serializer(user)
        result = []

        self.messages.each do |m|
            status = m.user === user ? "outgoing" : "incoming"
            result.push({
                id: m.id,
                status: status,
                content: m.content,
                messageDate: Date::ABBR_MONTHNAMES[m.created_at.month] + " " + m.created_at.day.to_s,
                messageTime: m.created_at.strftime("%I:%M %p"),
                chatPartnerAvatar: m.user.avatar
            })
        end
        
        result
    end

end
