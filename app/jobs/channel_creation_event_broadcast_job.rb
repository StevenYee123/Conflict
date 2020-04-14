class ChannelCreationEventBroadcastJob < ApplicationJob
    queue_as :default 

    def perform(channel)
        ActionCable.server.broadcast('channel_channel',{id: channel.id, name: channel.name, server_id: channel.server_id})
    end
end