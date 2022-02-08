class ContentWarningsController < ApplicationController

    def index
        render json: ContentWarning.all
    end
    
end
