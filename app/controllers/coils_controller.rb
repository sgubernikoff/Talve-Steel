class CoilsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound,with: :render_not_found
    skip_before_action :is_admin_logged_in?, only: [:index]
    # skip_before_action :is_logged_in?,only:[:index]
    
    def index
        render json: Coil.all
    end

    def show
        coil = Coil.find(params[:id])
        render json: coil
    end

    def create
        coil= Coil.create!(coil_params)
        render json: coil, status: :created
    end

    def update
        coil = Coil.find(params[:id])
        coil.update!(coil_params)
        render json: coil, status: 200
    end

    def destroy
        coil = Coil.find(params[:id])
        coil.destroy
        head :no_content
    end

    private
    
    def coil_params
      params.permit(:grade,:com_spec,:net,:gross,:quantity,:pkgs)
    end
    
    def render_unprocessable_entity invalid
      render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
    end
    
    def render_not_found
      render json: {error: "coil not found"}, status: 404
    end
end
