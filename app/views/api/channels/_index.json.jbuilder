@channels.each do |channel|
    json.partial! "api/channels/channel", channel: channel
end