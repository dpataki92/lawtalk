class UserSerializer < ActiveModel::Serializer
    attributes :username, :avatar, :location, :fields, :upvotes, :downvotes
   
end