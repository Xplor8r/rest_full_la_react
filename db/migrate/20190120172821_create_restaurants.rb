class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :foursquare_id
      t.string :address
      t.string :city
      t.string :category
      t.boolean :delivery
      t.string :delivery_url
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
