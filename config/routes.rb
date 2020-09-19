Rails.application.routes.draw do
  scope "/api" do
    resources :users, only: [:create, :edit, :update, :delete]
    post '/login', to: 'auth#create'
    get '/profile', to: 'users#profile'
    post '/questions', to: 'questions#index'
  end
end
