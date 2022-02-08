Rails.application.routes.draw do
  resources :content_warnings
  
  resources :authors
  resources :books


end
