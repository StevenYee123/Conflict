class Api::MessagesController < ApplicationController 
    def index 
        @channel = Channel.find(params[:channelId])
        @messages = @channel.messages

        render :index
    end

    def create
        @message = Message.new(message_params)
        if @message.save 
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