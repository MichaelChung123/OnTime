class AppController < ApplicationController
  def index
    @employees = Employee.all
    
  end
end
