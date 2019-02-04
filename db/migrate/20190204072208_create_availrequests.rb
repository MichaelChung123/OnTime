class CreateAvailrequests < ActiveRecord::Migration[5.2]
  def change
    create_table :availrequests do |t|
      t.boolean :accepted
      t.string :day
      t.integer :start_time
      t.integer :end_time

      t.timestamps
    end
  end
end
