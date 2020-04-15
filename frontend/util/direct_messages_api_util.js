export const fetchDirectMessages = () => {
    return $.ajax({
        method: "GET",
        url: "/api/direct_messages"
    });
};

export const fetchDirectMessage = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/direct_messages/${id}`
    });
};

export const createDirectMessage = (id) => {
    return $.ajax({
        method: "POST",
        url: "/api/direct_messages",
        data: { id }
    });
};