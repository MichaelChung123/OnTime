Rails.application.routes.draw do
   
   get '/', to: 'welcome#index'
   get 'app/index', to: 'app#index'
   get 'api/employees', to: 'api#employee'
   get 'api/shifts', to: 'api#shift'
   get 'api/availability', to: 'api#availability'
   post 'api/shifts', to: 'api#shift_create'
<<<<<<< HEAD
   post 'api/employees', to: 'api#employee_create'
   put 'api/employees', to: 'api#employee_edit'

=======
   get 'api/employeeshifts', to: 'api#employee_shifts'
>>>>>>> 30c279f312425517c74e10c7f297e595045386fc
end
