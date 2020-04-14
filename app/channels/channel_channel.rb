class ChannelChannel < ApplicationCable::Channel
    def subscribed 
        stream_from 'text_channel_channel'
    end

    def unsubscribed; end 

    def create(channel_params)
        Channel.create(channel_params)
    end

    def delete(channel)
        Channel.destroy(channel['id'])
    end

    def update(channel_params)
        Channel.update(channel_params)
    end
end