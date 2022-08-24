class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound,with: :render_not_found
    skip_before_action :is_logged_in?, only: [:show]
    skip_before_action :is_admin_logged_in?

    def show
        user = User.find(session[:user_id])
        if user
          render json: user
        else
          render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def update
        user = User.find_by(username:params[:username])
        user.update!(user_update_params)
        render json: user
    end

    private
    
    def user_update_params
        params.permit(:password)
    end
    
    def render_unprocessable_entity invalid
        render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
    end
    
    def render_not_found
        render json: {error: "User not found"}, status: 404
    end
end
