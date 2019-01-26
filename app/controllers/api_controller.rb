class ApiController < ApplicationController
    def index
        render json: Employee.all
    end
end
