Rails.application.routes.draw do
  scope "/api" do
    resources :users, only: [:create, :edit, :update, :delete]
    get '/users/top', to: 'users#top_users'
    get '/users/:id', to: 'users#show'
    get '/profile', to: 'users#profile'
    post '/login', to: 'auth#create'
    resources :questions, only: [:create, :edit, :update, :new, :show]
    post '/questions/list', to: 'questions#questions_list'
  end
end
