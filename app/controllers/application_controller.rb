class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  include PublicActivity::StoreController


  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    devise_parameter_sanitizer.permit(:sign_up, keys: [:location])
    devise_parameter_sanitizer.permit(:sign_up, keys: [:aboutMe])
    devise_parameter_sanitizer.permit(:sign_up, keys: [:firstName])
    devise_parameter_sanitizer.permit(:sign_up, keys: [:lastName])
    devise_parameter_sanitizer.permit(:sign_up, keys: [:lastName])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username])
    devise_parameter_sanitizer.permit(:sign_up, keys: [:avatar])
    devise_parameter_sanitizer.permit(:account_update, keys: [:avatar])


  end
end
