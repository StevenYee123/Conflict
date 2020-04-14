class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast('chat_channel',{created_at: message['created_at'].strftime("%m/%d/%Y at %l:%M:%S%P"), channelId: message.channel_id, id: message[:id], body: message[:body], author_id: message[:author_id]})
  end
end