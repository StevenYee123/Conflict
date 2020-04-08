Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    post "servers/join", to: "servers#join"
    delete "servers", to: "servers#leave"
    resources :channels, only: [:index, :show, :create, :update, :destroy]
  end
end
