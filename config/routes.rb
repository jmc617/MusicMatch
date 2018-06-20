Rails.application.routes.draw do

  get 'users/show'
  get 'events/search' => 'events#search'

  resources :events
  resources :matches
  devise_for :users
  resources :users

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  root 'event#index'
end
