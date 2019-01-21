require 'pry'

class Restaurant < ApplicationRecord

    def self.get_foursquare_data
        restaurantList = []
          response = Faraday.get 'https://api.foursquare.com/v2/venues/search' do |req|
            req.params['client_id'] = ENV['client_id']
            req.params['client_secret'] = ENV['client_secret']
            req.params['v'] = '20160201'
            req.params['near'] = 90017
            req.params['query'] = 'restaurant'
          end
          body = JSON.parse(response.body)
    
          if response.success?
            self.save_foursquare_data(body)
          else
            @error = body["meta"]["errorDetail"]
          end
        #   restaurants = body["response"]["venues"]
        #   render json: restaurants

    # binding.pry
    end
    
    def self.save_foursquare_data(data)
        data["response"]["venues"].map do |restaurant|
            new_restaurant = Restaurant.find_or_create_by(foursquare_id: restaurant["id"])
            new_restaurant.update_attribute_from_api(restaurant)
            new_restaurant.save
            # binding.pry
        end
    end
    
    def update_attribute_from_api(restaurant)
                    # binding.pry
        self.name = restaurant["name"]
        self.address = restaurant["location"]["address"]
        self.city = restaurant["location"]["city"]
        self.category = restaurant["categories"][0]["name"]
        restaurant.include?("delivery") ? self.delivery = true : self.delivery = false
        restaurant.include?("delivery") ? self.delivery_url = restaurant["delivery"]["url"]: self.delivery_url = nil
        self.latitude = restaurant["location"]["lat"]
        self.longitude = restaurant["location"]["lng"]
    end
end
