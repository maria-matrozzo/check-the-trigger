class UsersController < ApplicationController

    def create
        new_user = User.new(user_params)
        if new_user.save
            render json: user, status: :created
            session[:user_id] = new_user.id
        else
            render json: {"error": new_user.errors.full_messages}, status: :unprocessable_entity
        end 
           
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "No current user", status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end

end
