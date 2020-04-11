import * as ChannelApiUtil from "../util/channel_api_util";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";

export const receiveChannels = channels => {
    return {
        type: RECEIVE_CHANNELS,
        channels
    };
};

export const receiveChannel = channel => {
    return {
        type: RECEIVE_CHANNEL,
        channel
    };
};

export const removeChannel = channelId => {
    return {
        type: REMOVE_CHANNEL,
        channelId
    };
};

export const receiveChannelErrors = errors => {
    return {
        type: RECEIVE_CHANNEL_ERRORS,
        errors
    };
};

export const fetchChannels = (serverId) => dispatch => {
    return ChannelApiUtil.fetchChannels(serverId)
        .then((channels) => dispatch(receiveChannels(channels)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON)));
};

export const fetchChannel = (channelId) => dispatch => {
    return ChannelApiUtil.fetchChannel(channelId)
        .then((channel) => dispatch(receiveChannel(channel)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON)));
};

export const createChannel = (channel) => dispatch => {
    return ChannelApiUtil.createChannel(channel)
        .then((channel) => dispatch(receiveChannel(channel)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON)));
};

export const updateChannel = (channel) => dispatch => {
    return ChannelApiUtil.updateChannel(channel)
        .then((channel) => dispatch(receiveChannel(channel)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON)));
};

export const deleteChannel = (channelId) => dispatch => {
    return ChannelApiUtil.deleteChannel(channelId)
        .then((channel) => dispatch(removeChannel(channel.id)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON)));
};