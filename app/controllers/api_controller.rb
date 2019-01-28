class ApiController < ApplicationController
    skip_before_action :verify_authenticity_token
    def employee
        render json: Employee.all
    end
    def shift
        render json: Shift.all
    end

    def availability
        render json: Availability.all
    end
    def shift_create
        puts params[:employee_id]
        puts params[:day]
        puts params[:start_time]
        puts params[:end_time]
        puts params[:duration]
    end
end
