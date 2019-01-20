Rails.application.routes.draw do
  scope(:path => '/RailsApi') do
    get '/restaurants', to: 'restaurants#index'
  end
end
