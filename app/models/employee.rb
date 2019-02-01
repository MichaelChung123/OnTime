class Employee < ApplicationRecord
    has_many :shifts, dependent: :destroy
    has_many :availabilities, dependent: :destroy
end
