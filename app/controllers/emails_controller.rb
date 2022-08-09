class EmailsController < ApplicationController
    def send_email
        SendEmailMailer.with(email:params[:email],first:params[:first],last:params[:last],message:params[:message]).test_email.deliver_later
        SendEmailMailer.with(email:params[:email],first:params[:first],last:params[:last]).thank_you_email.deliver_later
        render json:{message:'message sent successfully'}
    end
end