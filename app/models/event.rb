class Event < ApplicationRecord
  belongs_to :user

  has_many :matches, dependent: :destroy
  has_many :users, through: :matches
  include PublicActivity::Model
  tracked owner: -> (controller, model) { controller && controller.current_user }

end
