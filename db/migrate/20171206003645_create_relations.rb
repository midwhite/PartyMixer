class CreateRelations < ActiveRecord::Migration[5.1]
  def change
    create_table :relations do |t|
      t.integer :user_id
      t.integer :friend_id
      t.integer :event_id
      t.integer :status
      t.string :memo

      t.timestamps
    end
  end
end
