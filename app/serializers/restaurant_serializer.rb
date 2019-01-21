class RestaurantSerializer < ActiveModel::Serializer
    attributes :id,
        :name,
        :foursquare_id,
        :address,
        :city,
        :category,
        :delivery,
        :delivery_url,
        :latitude,
        :longitude
end