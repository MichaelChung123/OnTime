Rails.application.routes.draw do
  
   get '/', to: 'welcome#index'
   get 'app/index', to: 'app#index'
end
