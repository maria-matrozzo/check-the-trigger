class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :bio
  has_many :books

end
