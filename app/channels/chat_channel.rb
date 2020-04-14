class ChatChannel < ApplicationCable::Channel
  def subscribed
    # debugger
    channel = Channel.find_by(name: params[:channel])
    # stream_from 'chat_channel'
    stream_for channel
  end

  def unsubscribed; end

  def create(message_params)
    Message.create(author_id: message_params['content']['author_id'], body: message_params['content']['body'], channel_id: message_params['content']['channel_id'])
  end
end