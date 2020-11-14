Rails.application.routes.draw do
  scope "/api" do
    resources :users, only: [:create, :update, :destroy]
    get '/users/top', to: 'users#top_users'
    get '/users/:id', to: 'users#show'
    get '/profile', to: 'users#profile'
    # get '/auth/:provider/callback', to: 'users#create_with_omniauth'
    
    post '/login', to: 'auth#create'

    resources :questions, only: [:create, :update, :new, :show, :destroy]
    post '/questions/list', to: 'questions#questions_list'
    get '/questions/:id/replies', to: 'questions#replies'
    get '/questions/:id/follow', to: 'questions#follow_thread'
    get '/questions/:id/unfollow', to: 'questions#unfollow_thread'

    resources :answers, only: [:create, :update, :destroy]
    post '/answers/:id/vote', to: 'answers#vote'
    get '/answers/:id/comments', to: 'answers#comments'

    resources :comments, only: [:create, :update, :destroy]
    post '/comments/:id/vote', to: 'comments#vote'

    get '/users/:id/conversations', to: 'conversations#index'
    get '/users/:id/conversations/:convId', to: 'conversations#show'
  end
end
