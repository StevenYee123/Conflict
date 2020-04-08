class Api::ServersController < ApplicationController 
    before_action :ensure_logged_in
    def create
        @server = Server.new(server_params)
        @server.leader_id = current_user.id
        if @server.save
            if current_user.id == @server.leader.id
                initial_setup(current_user, @server)
            end

            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def index 
        @servers = current_user.servers

        render :index
    end

    def show 
        @server = Server.find(params[:id])
        if @server 
            render :show 
        else
            @server.errors.full_messages, status: 404
        end
    end

    def update
        @server = Server.find(params[:id])
        if @server && @server.leader.id == current_user.id && @server.update(server_params)

        else
            render json: @server.errors.full_messages
        end
    end

    private
    def server_params
       params.require(:server).permit(:name) 
    end

    def initial_setup(user, server)
        ServerMembership.create({member_id: user.id, server_id: server.id})
        Channel.create({name: "General", server_id: server.id})
    end
end