Rails.application.routes.draw do

  resources :authors
  resources :books
  resources :users

  # get '/me', to: "users#show"
  # post '/login'
  # delete '/logout', to: "sessions#logout"

end
