Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }

  root to: 'homes#welcome'

  namespace :api do
    resources :users do
      collection do
        get  'me'
        resources :relations
      end
    end
  end

  get '*path', to: 'homes#welcome'
end
