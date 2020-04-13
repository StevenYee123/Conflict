export const fetchMessages = (channelId) => {
    return $.ajax({
        method: "GET",
        url: "/api/messages",
        data: {channelId}
    });
};

export const createMessage = (message) => {
    return $.ajax({
        method: "POST",
        url: "/api/messages",
        data: { message }
    });
}