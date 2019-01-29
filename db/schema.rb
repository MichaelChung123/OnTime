ActiveRecord::Schema.define(version: 2019_01_26_001804) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "availabilities", force: :cascade do |t|
    t.bigint "employee_id"
    t.string "day"
    t.integer "start_time"
    t.integer "end_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_availabilities_on_employee_id"
  end

  create_table "employees", force: :cascade do |t|
    t.bigint "user_id"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "occupation"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_employees_on_user_id"
  end

  create_table "shifts", force: :cascade do |t|
    t.bigint "employee_id"
    t.string "day"
    t.integer "start_time"
    t.integer "end_time"
    t.integer "duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_shifts_on_employee_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "availabilities", "employees"
  add_foreign_key "employees", "users"
  add_foreign_key "shifts", "employees"
end
