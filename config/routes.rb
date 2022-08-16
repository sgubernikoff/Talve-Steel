Rails.application.routes.draw do
  post '/send_email', to: 'emails#send_email'
  get '/emails', to: 'emails#index'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
