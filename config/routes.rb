Rails.application.routes.draw do
  scope(:path => '/RailsApi') do
    get '/restaurants', to: 'restaurants#foursquare'
    get '/maps', to: 'maps#googlemap'
  end
end
