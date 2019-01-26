Rails.application.routes.draw do
  
   get '/', to: 'welcome#index'
   get 'app/index', to: 'app#index'
   get 'api/employees', to: 'api#index'
end
