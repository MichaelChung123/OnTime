class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.references :user, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :occupation
      t.string :phone_number

      t.timestamps
      
    end
  end
end
