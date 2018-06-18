class Event < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :date
      t.string :location
      t.string :performer
      t.string :img_url
      t.integer :user_id
    end
    create_table :matches do |t|
      t.integer :user_id
      t.integer :event_id
    end
  end
end
