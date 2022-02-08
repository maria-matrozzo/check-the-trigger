class BooksController < ApplicationController

    def index
        render json: Book.all
    end

    def show
        book = Book.find_by(id:params[:id])
        if book
            render json: book
        else
            render json: {"error": "Book not found"}, status: :not_found
        end
    end

    def create
        new_book = Book.new(book_params)
        if new_book.save
            render json: new_book, status: :created
        else
            render json: {"errors": new_book.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        delete_book = Book.find_by(id:params[:id])
        if delete_book
            delete_book.destroy
            head :no_content
        else
            render json: {"error": "Book not found"}, status: :not_found
        end
    end

    private

    def book_params
        params.permit(:title, :image, :pages, :genre, :description)
    end
    
end
