class RestaurantSerializer < ActiveModel::Serializer
    attributes :id,
        :name,
        :foursquare_id,
        :address,
        :city,
        :delivery,
        :delivery_url,
        :latitude,
        :longitude
end