json.extract! server, :id, :name, :leader_id, :private_status
json.users server.users.ids
json.channels server.channels.ids