class Api::ChannelsController < ApplicationController 
    before_action :ensure_logged_in

    def show 
        @channel = Channel.find(params[:id])
        if @channel
            render :show 
        else
            render json: ["Sorry, this channel doesn't exist"], status: 422
        end
    end

    def index
        @server = Server.find(params[:serverId])
        @channels = @server.channels
        render :index
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save 
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def update 
        @channel = Channel.find(params[:id])
        if @channel && @channel.update(name: params[:name])
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = current_user.channels.find_by(id: params[:id])

        if @channel
            @channel.destroy 
            render :show 
        else
            render json: ["Couldn't delete the channel :("], status: 404
        end
    end

    private 
    def channel_params
        params.require(:channel).permit(:name, :server_id)
    end
end