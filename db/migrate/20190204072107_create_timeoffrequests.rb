class CreateTimeoffrequests < ActiveRecord::Migration[5.2]
  def change
    create_table :timeoffrequests do |t|
      t.boolean :accepted
      t.integer :start_month
      t.integer :start_day
      t.integer :end_month
      t.integer :end_day
      t.string :reason

      t.timestamps
    end
  end
end
