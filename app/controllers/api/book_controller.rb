class Api::BooksController < ApplicationController
    
    # get books
    def index
        render json: Book.all, serializer: BookSerializer
    end
    
end
