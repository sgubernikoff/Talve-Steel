class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :is_logged_in?
  before_action :is_admin_logged_in?

  def is_logged_in?
    render json: {errors: ['UNAUTHORIZED: PLEASE LOGIN.']}, status: :unauthorized unless session.include? :user_id
  end

  def is_admin_logged_in?
    user= User.find(session[:user_id])
    render json: {errors: ['UNAUTHORIZED: YOU ARE NOT AN ADMIN.']}, status: :unauthorized unless user.isAdmin
  end
end
