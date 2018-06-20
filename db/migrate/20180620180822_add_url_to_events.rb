class AddUrlToEvents < ActiveRecord::Migration[5.2]
  def change
    change_table :events do |t|
      t.string :url
      t.integer :price_min
      t.ineger :price_max
    end
  end
end
