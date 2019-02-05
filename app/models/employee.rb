class Employee < ApplicationRecord
    has_many :shifts, dependent: :destroy
    has_many :availabilities, dependent: :destroy
    has_many :timeoffrequests, dependent: :destroy
    has_many :availrequests, dependent: :destroy
end
