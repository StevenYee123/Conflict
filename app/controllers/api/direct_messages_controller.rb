class Api::DirectMessagesController < ApplicationController 
    def index 
        @servers = current_user.servers.where(private_status: true)
    end

    def create 
        if current_user.id.to_s == params[:id]
            render json: ["Can't be homies with yourself sorry!"], status: 422
        elsif current_user.servers.where(private_status: true).any? {|server| server.users.ids.include?(params[:id].to_i)}
            render 'api/direct_messages/show.json.jbuilder'
        else
            @server = Server.new(name: "direct_message #{current_user.username} #{params[:id]}", leader_id: current_user.id, private_status: true)
            if @server.save 
                @channel = Channel.create({name: "General", server_id: @server.id})
                join_server(current_user.id, @server)
                join_server(params[:id], @server)
                render "api/direct_messages/show.json.jbuilder"
            else
                render json: ['Unable to DM :('], status: 422
            end
        end
    end

    def show 
        @server = Server.find(params[:id])
        render :show
    end

    private 
    def join_server(user_id, server)
        ServerMembership.create!({member_id: user_id, server_id: server.id})
    end
end