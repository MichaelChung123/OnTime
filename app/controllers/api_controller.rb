class ApiController < ApplicationController
    skip_before_action :verify_authenticity_token
    def employee
        render json: Employee.all
    end
    
    def employee_shifts
        render json: Employee.all.to_json(:include => :shifts)
    end

    def shift
        render json: Shift.all
    end

    def availability
        render json: Availability.all
    end

    def availability_edit
        puts params

        current_availability = Availability.find(params[:employee_id])

        current_availability.update!(
            id: 1,
            employee_id: params[:employee_id],
            day: "Monday",
            start_time: params[:monStart],
            end_time: params[:monEnd]
        )
    end
    
    def user
        render json: User.all
    end

    def shift_create
        puts params;
        
        Shift.create!(
            employee_id: params[:employee_id],
            day: params[:day],
            start_time: params[:start_time],
            end_time: params[:end_time],
            duration: params[:duration],
            note: params[:note]
        )
    end

    def employee_create
        puts params;

        Employee.create!(
            user_id: params[:user_id],
            first_name: params[:first_name],
            last_name: params[:last_name],
            email: params[:email],
            occupation: params[:occupation],
            phone_number: params[:phone_number]
        )
    end

    def employee_edit
        puts params;
        
        current_employee = Employee.find(params[:id])

        current_employee.update!(
            user_id: params[:user_id],
            first_name: params[:first_name],
            last_name: params[:last_name],
            email: params[:email],
            occupation: params[:occupation],
            phone_number: params[:phone_number]
        )
    end

    def employee_delete

        current_employee = Employee.find(params[:id])

        current_employee.destroy
    
    end

    def shift_delete
        puts params[:_json]
        Shift.destroy(params[:_json])
    end

    def shift_edit
        puts params
        current_shift = Shift.find(params[:shiftId])
        current_shift.update!(
            employee_id: params[:employeeId],
            duration: params[:duration],
            start_time: params[:start],
            end_time: params[:end],
            note: params[:note]
        )
    end
        

end
