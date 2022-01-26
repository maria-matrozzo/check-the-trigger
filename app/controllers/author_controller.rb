# class Api::AuthorController < ApplicationController
class AuthorsController < ApplicationController


    # get authors
    def index
        render json: Author.all, serializer: AuthorSerializer
    end

end
