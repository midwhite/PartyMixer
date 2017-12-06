class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title
      t.datetime :start_at
      t.datetime :end_at
      t.string :area
      t.string :place
      t.integer :price
      t.string :url

      t.timestamps
    end
  end
end
