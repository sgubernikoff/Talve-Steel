Rails.application.routes.draw do
  post '/emails', to: 'emails#send_email'
  get '/emails', to: 'emails#index'
  post "/login", to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get "/me", to: 'users#show'
  patch '/me', to: 'users#update'
  resources :coils
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
