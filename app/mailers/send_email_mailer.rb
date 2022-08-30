class SendEmailMailer < ApplicationMailer
    default from: 'do.not.reply.anchorstainless@gmail.com'

    def test_email
        @email = params[:email]
        @first = params[:first]
        @last = params[:last]
        @body = params[:message]
        mail(:to=>['larry@anchorstainless.com','zack@anchorstainless.com'], subject:'New Message')
    end

    def thank_you_email
        @email = params[:email]
        @first = params[:first]
        @last = params[:last]
        mail(to:@email, subject:'Thank you for contacting us!')
    end
end
