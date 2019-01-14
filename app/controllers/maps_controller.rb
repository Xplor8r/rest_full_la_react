class mapsController < ApplicationController

    def googlemap
        response = Faraday.get 'https://www.google.com/maps/embed/v1/view' do |req|
            req.params['key'] = ENV['apiGoogleKey']
            req.params['center'] = 34.0544, -118.2673
            req.params['zoom'] = 14
            req.params['maptype'] = 'satellite'
        end
        body = JSON.parse(response.body)
        render json: body
    end
