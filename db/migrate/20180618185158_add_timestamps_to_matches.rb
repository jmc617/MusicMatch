class AddTimestampsToMatches < ActiveRecord::Migration[5.2]
  def change
    add_column :matches, :created_at, :datetime
    add_column :matches, :updated_at, :datetime
  end
end
