json.extract! server, :id, :name, :leader_id, :private_status, :invite_link, :users
json.users server.users.ids
json.channels server.channels.ids