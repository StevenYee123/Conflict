json.extract! server, :id, :name, :leader_id, :private_status, :invite_link
json.users server.users.ids
json.channels server.channels.ids