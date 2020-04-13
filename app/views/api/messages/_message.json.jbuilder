json.extract! message, :id, :body, :author_id

if message.author
    json.author message.author.username
end

json.created_at message.created_at.strftime("%m/%d/%Y at%l:%M:%S%P")
json.channelId message.channel.id