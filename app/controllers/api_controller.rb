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

    def timeoff_request
        render json: Timeoffrequest.all
    end

    def availability_edit
        monday = Availability.where(employee_id: 1, day: "Monday")
        tuesday = Availability.where(employee_id: 1, day: "Tuesday")
        wednesday =Availability.where(employee_id: 1, day: "Wednesday")
        thursday = Availability.where(employee_id: 1, day: "Thursday")
        friday = Availability.where(employee_id: 1, day: "Friday")
        saturday = Availability.where(employee_id: 1, day: "Saturday")
        sunday = Availability.where(employee_id: 1, day: "Sunday")

        monday.update!(
            employee_id: params[:employee_id],
            day: "Monday",
            start_time: params[:monStart],
            end_time: params[:monEnd]
        )
        tuesday.update!(
            employee_id: params[:employee_id],
            day: "Tuesday",
            start_time: params[:tueStart],
            end_time: params[:tuesEnd]
        )
        wednesday.update!(
            employee_id: params[:employee_id],
            day: "Wednesday",
            start_time: params[:wedStart],
            end_time: params[:wedEnd]
        )
        thursday.update!(
            employee_id: params[:employee_id],
            day: "Thursday",
            start_time: params[:thuStart],
            end_time: params[:thursEnd]
        )
        friday.update!(
            employee_id: params[:employee_id],
            day: "Friday",
            start_time: params[:friStart],
            end_time: params[:friEnd]
        )
        saturday.update!(
            employee_id: params[:employee_id],
            day: "Saturday",
            start_time: params[:satStart],
            end_time: params[:satEnd]
        )
        sunday.update!(
            employee_id: params[:employee_id],
            day: "Sunday",
            start_time: params[:sunStart],
            end_time: params[:sunEnd]
        )
    end

    def availability_request
        render json: Availrequest.all
    end

    def availability_request_create
        ## Todo: employee_id should be dynamic
        Availrequest.create!(
            employee_id: 1,
            accepted: false,
            day: "Monday",
            start_time: params[:monStart],
            end_time: params[:monEnd]
        )

        Availrequest.create!(
            employee_id: 1,
            accepted: false,
            day: "Tuesday",
            start_time: params[:tueStart],
            end_time: params[:tueEnd]
        )

        Availrequest.create!(
            employee_id: 1,
            accepted: false,
            day: "Wednesday",
            start_time: params[:wedStart],
            end_time: params[:wedEnd]
        )

        Availrequest.create!(
            employee_id: 1,
            accepted: false,
            day: "Thursday",
            start_time: params[:thuStart],
            end_time: params[:thuEnd]
        )

        Availrequest.create!(
            employee_id: 1,
            accepted: false,
            day: "Friday",
            start_time: params[:friStart],
            end_time: params[:friEnd]
        )

        Availrequest.create!(
            employee_id: 1,
            accepted: false,
            day: "Saturday",
            start_time: params[:satStart],
            end_time: params[:satEnd]
        )

        Availrequest.create!(
            employee_id: 1,
            accepted: false,
            day: "Sunday",
            start_time: params[:sunStart],
            end_time: params[:sunEnd]
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
    
    def timeoff_request_create
        ## Todo: employee_id should be dynamic
        Timeoffrequest.create!(
            employee_id: params[:employeeId],
            accepted: true,
            start_month: params[:monthStart],
            start_day: params[:dayStart],
            end_month: params[:monthEnd],        
            end_day: params[:dayEnd],
            reason: params[:reason]
        )
    end

end
