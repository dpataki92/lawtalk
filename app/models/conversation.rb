class Conversation < ApplicationRecord
    belongs_to :author, class_name: 'User'
    belongs_to :receiver, class_name: 'User'
    has_many :messages, -> { order(created_at: :asc) }, dependent: :destroy


    validates :author, uniqueness: {scope: :receiver}

    def self.conversations_serializer(user)
        result = []
        
        conversations = (user.authored_conversations + user.received_conversations).sort {|a,b| b.updated_at <=> a.updated_at}

        conversations.each do |c|
            chatPartner = c.author === user ? c.receiver : c.author
            result.push({
                lastMessageDate: Date::ABBR_MONTHNAMES[c.updated_at.month] + " " + c.updated_at.day.to_s,
                lastMessage: c.messages.sort {|a,b| b.created_at <=> a.created_at}[0].content[0..77],
                chatPartner: chatPartner.username
            })
        end

        result
    end

end
