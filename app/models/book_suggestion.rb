class BookSuggestion < MailForm::Base
  attribute :book, validate: true
  attribute :author, validate: true

  attribute :message

  # validates :book, presence: true, uniqueness: true
  # validates :author, presence: true, uniqueness: true

  def headers
    { 
      subject: "New Book Recommendation",
      to: "mmatrozzo@gmail.com" 
    }
  end

end
