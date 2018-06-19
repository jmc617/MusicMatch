Rails.application.routes.draw do

  get 'welcome/index'

  resources :events
  resources :matches
  devise_for :users
  resources :users

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  root 'welcome#index'
end
