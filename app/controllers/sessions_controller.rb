class SessionsController < ApplicationController
    skip_before_action :is_logged_in?, only: [:create]
    skip_before_action :is_admin_logged_in?

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Incorrect password"] }, status: :unauthorized
        end
    end
    
    def destroy
        session.delete :user_id
        head :no_content
    end
end
