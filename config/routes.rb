Rails.application.routes.draw do
  scope "/api" do
    resources :users, only: [:create, :edit, :update, :delete]
    post '/login', to: 'auth#create'
    get '/profile', to: 'users#profile'
    resources :questions, only: [:create, :edit, :update, :new]
    post '/questions/list', to: 'questions#questions_list'
  end
end
