class AddColumnsToEvents < ActiveRecord::Migration[5.2]
  def change
    change_table :events do |t|
      t.integer :price_min
      t.integer :price_max
    end
  end
end
