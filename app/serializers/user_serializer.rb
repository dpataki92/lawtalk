class UserSerializer < ActiveModel::Serializer
    attributes :username, :avatar, :email, :location, :fields, :bio, :upvotes, :downvotes
   
end