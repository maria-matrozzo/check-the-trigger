class Book < ApplicationRecord
    belongs_to :author
    has_many :content_warnings, dependent: :destroy

    validates :title, uniqueness: { case_sensitive: false }
end
