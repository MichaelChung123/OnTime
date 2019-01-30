Rails.application.routes.draw do
   
   get '/', to: 'welcome#index'
   get 'app/index', to: 'app#index'
   get 'api/employees', to: 'api#employee'
   get 'api/shifts', to: 'api#shift'
   get 'api/availability', to: 'api#availability'
   post 'api/shifts', to: 'api#shift_create'
   put 'api/employees', to: 'api#employee_edit'

end
