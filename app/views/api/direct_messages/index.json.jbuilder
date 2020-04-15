@servers.each do |server|
    json.set! server.id do 
        json.partial! 'api/direct_messages/direct_message', server: server
    end
end