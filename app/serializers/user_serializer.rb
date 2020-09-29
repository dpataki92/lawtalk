class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :avatar, :email, :location, :fields, :bio, :upvotes, :downvotes
   
end