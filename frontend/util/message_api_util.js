export const fetchMessages = (channelId) => {
    return $.ajax({
        method: "GET",
        url: "/api/messages",
        data: {channelId}
    });
};

export const createChannelMessage = (message) => {
    return $.ajax({
        method: "POST",
        url: `/api/channels/${message.threadId}/messages`,
        data: { message }
    });
}