class Api::HomiesController < ApplicationController
    def index 
        @homies = Homie.all 
        render :index 
    end

    def create 
        @user = User.find_by(username: params[:name])
        if !@user 
            render json: ["Couldn't find this user"], status: 422
        elsif (current_user.id == @user.id)
            render json: ["Can't add yourself buddy"], status: 422
        elsif (current_user.homie_memberships.any?{|friend_id| friend_id == @user.id})
            render json: ["Already homies"], status: 422 
        else
            @homie = Homie.new({user_one: current_user.id, user_two: @user.id})
            @homie2 = Homie.new({user_one: @user.id, user_two: current_user.id})
            if @homie.save && @homie2.save 
                render :show 
            else
                render json: ["Could not add this homie"], status: 422
            end
        end
    end

    def show 
        @homie = User.find(params[:id])
        if @homie
            render :show 
        else
            render json: ["Could not find this Homie"], status: 422
        end
    end

    def destroy 
        @homie = Homie.find_by(user_one: current_user.id, user_two: params[:id])
        @homie2 = Homie.find_by(user_one: params[:id], user_two: current_user.id)
        if @homie && @homie2
            @homie.destroy
            @homie2.destroy
        else
            render json: ["Homie bond is too strong!"], status: 404
        end
    end
end