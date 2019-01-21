Rails.application.routes.draw do
  scope(:path => '/RailsApi') do
    resources :restaurants
  end
end
