class CreateShifts < ActiveRecord::Migration[5.2]
  def change
    create_table :shifts do |t|
      t.references :employee, foreign_key: true
      t.string :day
      t.integer :stat_time
      t.integer :end_time
      t.integer :duration

      t.timestamps
    end
  end
end
