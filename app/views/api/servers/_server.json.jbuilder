json.extract! server, :id, :name, :leader_id, :private_status, :invite_link, :users
json.users server.users
json.channels server.channels.ids