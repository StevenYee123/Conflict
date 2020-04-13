@messages.order('created_at DESC').load.reverse.each do |message|
  json.set! message.id do
    json.partial! 'api/messages/message', message: message
  end
end