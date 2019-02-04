Rails.application.routes.draw do
   
   get '/', to: 'welcome#index'
   get '/employee', to: 'employee#index'
   get 'app/index', to: 'app#index'
   get 'api/employees', to: 'api#employee'
   get 'api/shifts', to: 'api#shift'
   get 'api/users', to: 'api#user'
   get 'api/availability', to: 'api#availability'
   put 'api/availability', to: 'api#availability_edit'
   post 'api/shifts', to: 'api#shift_create'
   post 'api/employees', to: 'api#employee_create'
   put 'api/employees', to: 'api#employee_edit'
   get 'api/employeeshifts', to: 'api#employee_shifts'
   delete 'api/employees/:id', to: 'api#employee_delete'
   delete 'api/shifts/', to: 'api#shift_delete'
   put 'api/shifts', to: 'api#shift_edit'
   

end
