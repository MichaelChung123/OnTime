class CreateAvailabilities < ActiveRecord::Migration[5.2]
  def change
    create_table :availabilities do |t|
      t.references :employee, foreign_key: true
      t.string :day
      t.integer :start_time
      t.integer :end_time

      t.timestamps
    end
  end
end
