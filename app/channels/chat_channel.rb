class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end

  # def speak 
  #   message = Message.create(author_id: message_params['content']['author_id'], body: message_params['content']['body'], channel_id: message_params['content']['channel_id'])
  #   socket = { message: message.body }
  #   ChatChannel.broadcast_to('chat_channel', socket)
  # end
  def create(message_params)
    Message.create(author_id: message_params['content']['author_id'], body: message_params['content']['body'], channel_id: message_params['content']['channel_id'])
  end

  def self.load(message)
    socket = {messages: message, type: 'messages'} 
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed; end

end