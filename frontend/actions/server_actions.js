import * as ServerAPIUtil from "../util/server_api_util";

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const CLEAR_SERVER_ERRORS = "CLEAR_SERVER_ERRORS";

export const receiveServers = servers => ({
    type: RECEIVE_SERVERS,
    servers
});

export const receiveServer = server => ({
    type: RECEIVE_SERVER,
    server
});

export const removeServer = serverId => ({
    type: REMOVE_SERVER,
    serverId
});

export const receiveServerErrors = errors => ({
    type: RECEIVE_SERVER_ERRORS,
    errors 
});

export const clearServerErrors = errors => ({
    type: CLEAR_SERVER_ERRORS,
    errors
});

export const fetchServers = () => dispatch => {
    return ServerAPIUtil.fetchServers()
    .then((servers) => dispatch(receiveServers(servers)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchServer = serverId => dispatch => {
    return ServerAPIUtil.fetchServer(serverId)
    .then((server) => dispatch(receiveServer(server)),
    (errors) => dispatch(receiveServerErrors(errors.responseJSON)));
};

export const createServer = server => dispatch => {
    return ServerAPIUtil.createServer(server)
    .then((server) => dispatch(receiveServer(server)),
    (errors) => dispatch(receiveServerErrors(errors.responseJSON)));
};

export const updateServer = server => dispatch => {
    return ServerAPIUtil.updateServer(server)
    .then((server) => dispatch(receiveServer(server)),
    (errors) => dispatch(receiveServerErrors(errors.responseJSON)));
};

export const deleteServer = serverId => dispatch => {
    return ServerAPIUtil.deleteServer(serverId)
    .then((server) => dispatch(removeServer(server.id)),
    (errors) => dispatch(receiveServerErrors(errors.responseJSON)));
};

export const joinServer = name => dispatch => {
    return ServerAPIUtil.joinServer(name)
    .then((server) => dispatch(receiveServer(server)),
    (errors) => dispatch(receiveServerErrors(errors.responseJSON)));
};

export const leaveServer = serverId => dispatch => {
    return ServerAPIUtil.leaveServer(serverId)
    .then((server) => dispatch(removeServer(serverId)),
    (errors) => dispatch(receiveServerErrors(errors.responseJSON)));
};