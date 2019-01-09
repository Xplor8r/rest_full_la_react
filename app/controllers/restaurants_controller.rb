require 'pry'

class RestaurantsController < ApplicationController

  def foursquare
    restaurantList = []
      response = Faraday.get 'https://api.foursquare.com/v2/venues/search' do |req|
        req.params['client_id'] = ENV['client_id']
        req.params['client_secret'] = ENV['client_secret']
        req.params['v'] = '20160201'
        req.params['near'] = 90017
        req.params['query'] = 'restaurant'
      end
      body = JSON.parse(response.body)
      restaurants = body["response"]["venues"]
      # excedes foursquare premium calls quota
      # restaurants.each do |restaurant|
      #   id = restaurant["id"]
      #   response = Faraday.get ('https://api.foursquare.com/v2/venues/' + id) do |req|
      #     req.params['client_id'] = ENV['client_id']
      #     req.params['client_secret'] = ENV['client_secret']
      #     req.params['v'] = '20160201'
      #   end
      #     body = JSON.parse(response.body)
      #     restaurantData = body["response"]["venue"]
      #     restaurantList.push(restaurantData)
      #     restaurantList
      # end
     render json: restaurants
# binding.pry
  end
end
