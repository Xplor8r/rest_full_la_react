Rails.application.routes.draw do
  scope(:path => '/RailsApi') do
    get '/restaurants', to: 'restaurants#index'
    post '/create', to: 'restaurants#create'
  end
end
