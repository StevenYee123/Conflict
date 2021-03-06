Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    post 'servers/join', to: 'servers#join'
    delete "servers", to: "servers#leave"
    resources :channels, only: [:index, :show, :create, :update, :destroy]
    resources :messages, only: [:create, :index, :destroy]
    resources :direct_messages, only: [:create, :index, :show]
    resources :homies, only: [:create, :index, :show, :destroy]
  end

  mount ActionCable.server => '/cable'
end
