require 'pry'

class RestaurantsController < ApplicationController

  def index
    Restaurant.get_foursquare_data
    restaurants = Restaurant.order("created_at DESC")
    render json: restaurants
  end

  def create
    restaurant = Restaurant.new(restaurant_params)
    if restaurant.save 
        render json: restaurant, status: 200
    else
        render json: {message: restaurant.errors}, status: 400    
    end
  end    

  private

  def restaurant_params
    params.require(:restaurant).permit(:id,
      :name,
      :foursquare_id,
      :address,
      :city,
      :category,
      :delivery,
      :delivery_url,
      :latitude,
      :longitude)
  end
end
