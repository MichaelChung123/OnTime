class CreateTimeoffrequests < ActiveRecord::Migration[5.2]
  def change
    create_table :timeoffrequests do |t|
      t.references :employee, foreign_key: true
      t.boolean :accepted
      t.integer :start_month
      t.integer :start_day
      t.integer :end_month
      t.integer :end_day
      t.string :reason
      t.integer :year

      t.timestamps
    end
  end
end
