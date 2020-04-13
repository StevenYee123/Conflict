json.extract! message, :id, :body, :author_id
json.created_at message.created_at.strftime("%m/%d/%Y at %l:%M:%S%P")
json.channelId message.channel.id