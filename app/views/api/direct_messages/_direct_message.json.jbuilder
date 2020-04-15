json.extract! server, :id, :private_status
json.channelId server.channels.ids[0]
json.user server.users.ids.reject {|id| id == current_user.id}[0]