class Api::MessagesController < ApplicationController 
    def index 
        @channel = Channel.find(params[:channelId])
        @messages = @channel.messages

        render :index
    end

    def create
        @message = Message.new(message_params)
        if @message.save 
            message = {
                id: @message,
                author: @message.author.username,
                author_id: @message.author_id,
                body: @message.body,
                created_at: @message.created_at.strftime("%m/%d/%Y at %I:%M%p"),
                updated_at: @message.updated_at
            }

            ChatChannel.load(message.as_json)
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    private 
    def message_params 
        params.require(:message).permit(:body, :channel_id, :author_id)
    end
end