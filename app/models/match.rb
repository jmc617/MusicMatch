class Match < ApplicationRecord
  belongs_to :users
  belongs_to :events
end
