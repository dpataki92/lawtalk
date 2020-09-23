class UserSerializer < ActiveModel::Serializer
    attributes :username, :avatar, :email, :location, :fields, :upvotes, :downvotes
   
end