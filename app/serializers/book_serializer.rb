class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :pages, :description, :publication_date, :publisher, :genre, :content_warnings
  has_one :author
  # has_many :content_warnings

  def content_warnings
    object.content_warnings[0]
  end
    
end
