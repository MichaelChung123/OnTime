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
        puts params;
        
        Shift.create!(
            employee_id: params[:employee_id],
            day: params[:day],
            start_time: params[:start_time],
            end_time: params[:end_time],
            duration: params[:duration]
        )
    end

    def employee_edit
        puts params;
        
        current_employee = Employee.find(params[:id])

        current_employee.update!(
            first_name: params[:first_name],
            last_name: params[:last_name],
            email: params[:email],
            occupation: params[:occupation],
            phone_number: params[:phone_number]
        )
    end

        

end
