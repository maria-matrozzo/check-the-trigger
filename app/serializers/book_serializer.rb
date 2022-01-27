class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :pages, :description, :publication_date, :publisher, :genre, :author_id
  has_one :author
    
end
