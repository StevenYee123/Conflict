export const fetchHomies = () => {
    return $.ajax({
        method: "GET",
        url: "/api/homies"
    });
};

export const fetchHomie = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/homies/${id}`
    });
};

export const createHomie = (name) => {
    return $.ajax({
        method: "POST",
        url: "/api/homies",
        data: { name }
    });
};

export const deleteHomie = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/homies/${id}`
    });
};