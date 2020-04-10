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
            render json: @server.errors.full_messages, status: 404
        end
    end

    def update
        @server = Server.find(params[:id])
        if @server && @server.leader.id == current_user.id && @server.update(server_params)
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def destroy 
        @server = Server.find(params[:id])
        if @server && @server.destroy 
            render :show
        else
            render json: ["Only the leader can delete this server!"], status: 400
        end
    end

    def join
        @server = Server.find_by(name: params[:name])
        if @server
            ServerMembership.create(member_id: current_user.id, server_id: @server.id)
            render :show
        elsif current_user.servers.include?(@server)
            render json: ["You're already part of this server!"], status: 404
        else
            render json: ["Sorry, this server doesn't exist :("], status: 404
        end
    end

    def leave 
        @server = current_user.servers.find_by(id: params[:id])
        @server_membership = ServerMembership.find_by(user_id: current_user.id, server_id: params[:id])
        if @server && @server_membership
            @server_membership.destroy
            @server
        else 
            render json: ["Leaving server failed! :("], status: 400
        end
    end

    private
    def server_params
       params.require(:server).permit(:name, :privateStatus, :leaderId) 
    end

    def initial_setup(user, server)
        ServerMembership.create({member_id: user.id, server_id: server.id})
        Channel.create({name: "General", server_id: server.id})
    end
end