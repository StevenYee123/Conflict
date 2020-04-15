import * as HomiesAPIUtil from "../util/homies_api_util";

export const RECEIVE_HOMIES = "RECEIVE_HOMIES";
export const RECEIVE_HOMIE = "RECEIVE_HOMIE";
export const REMOVE_HOMIE = "REMOVE_HOMIE";
export const RECEIVE_HOMIE_ERRORS = "RECEIVE_HOMIE_ERRORS";

export const receiveHomies = (homies) => {
    return {
        type: RECEIVE_HOMIES,
        homies
    };
};

export const receiveHomie = (homieId) => {
    return {
        type: RECEIVE_HOMIE,
        homieId
    };
};

export const removeHomie = (homieId) => {
    return {
        type: REMOVE_HOMIE,
        homieId
    }
}

export const receiveHomieErrors = (errors) => {
    return {
        type: RECEIVE_HOMIE_ERRORS,
        errors
    };
};

export const fetchHomies = () => dispatch => {
    return HomiesAPIUtil.fetchHomies()
        .then((homies) => dispatch(receiveHomies(homies)),
        (errors) => dispatch(receiveHomieErrors(errors.responseJSON)));
};

export const fetchHomie = (id) => dispatch => {
    return HomiesAPIUtil.fetchHomie(id)
        .then((homie) => dispatch(receiveHomie(homie)),
        (errors) => dispatch(receiveHomieErrors(errors.responseJSON)));
};

export const createHomie = (name) => dispatch => {
    return HomiesAPIUtil.createHomie(name)
        .then((homie) => {
            dispatch(receiveHomie(homie));
            return homie.homieId;
        },
        errors => dispatch(receiveHomieErrors(errors.responseJSON))
        );
};

export const deleteHomie = (id) => dispatch => {
    return HomiesAPIUtil.deleteHomie(id)
        .then(() => dispatch(removeHomie(id)),
        (errors) => dispatch(receiveHomieErrors(errors.responseJSON)));
};