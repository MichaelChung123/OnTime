class Employee < ApplicationRecord
    has_many :shifts
    has_many :availabilities
end
