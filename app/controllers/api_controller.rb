class ApiController < ApplicationController
    def employee
        render json: Employee.all
    end
    def shift
        render json: Shift.all
    end
    def availability
        render json: Availability.all
    end
end
