json.extract! message, :id, :body, :author_id, :thread_id, :created_at

if message.author
    json.author message.author.username
end

json.created_at message.created_at.strftime("%m/%d/%Y at%l:%M:%S%P")
json.channelId message.channel.id