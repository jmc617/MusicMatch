Rails.application.routes.draw do

  get 'events/search' => 'events#search'

  resources :events
  resources :matches
  devise_for :users

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  root 'event#index'
end
