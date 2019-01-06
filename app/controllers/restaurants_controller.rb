class RestaurantsController < ApplicationController

    def foursquare
        @response = Faraday.get 'https://api.foursquare.com/v2/venues/search' do |req|
          req.params['client_id'] = ENV['client_id']
          req.params['client_secret'] = ENV['client_secret']
          req.params['v'] = '20160201'
          req.params['near'] = 90017
          req.params['query'] = 'restaurant'
        end
        body = JSON.parse(@response.body)
        render json: body
    end
  end