Rails.application.routes.draw do

  get 'activities/index'
  get 'feed/index'
  get 'users/show'
  get 'events/search' => 'events#search'

  resources :events
  resources :feed
  resources :matches
  devise_for :users
  resources :users
  resources :users do
    member do
      get :following, :followers
    end
  end
  resources :relationships, only: [:create, :destroy]

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  root 'events#index'
end
