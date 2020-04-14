class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat_channel'
  end

  def unsubscribed; end

  def create(message_params)
    Message.create(author_id: message_params['content']['currentUserId'], body: message_params['content']['body'], text_channel_id: message_params['content']['text_channel_id'])
  end
end