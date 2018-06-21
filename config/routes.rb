Rails.application.routes.draw do
  root 'events#index'

  get 'users/show'
  get 'events/search' => 'events#search'

  resources :events
  resources :matches
  post "assign" => "matches#assign"
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

end
