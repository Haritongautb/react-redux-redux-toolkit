import {
    LIKES_INCREMENT,
    DISLIKES_INCREMENT,
    POST_TITLE_CHANGE,
    ADD_COMMENT,
    DELETE_COMMENT,
    CHANGE_COMMENT,
    LOAD_COMMENTS,

    LOAD_ON,
    LOAD_OFF,
    ERROR_ON,
    ERROR_OFF
} from "../types/types"

export const likesIncrement = () => {
    return {
        type: LIKES_INCREMENT
    }
}

export const dislikesIncrement = () => {
    return {
        type: DISLIKES_INCREMENT
    }
}

export const postTitleChange = (text) => {
    return {
        type: POST_TITLE_CHANGE,
        payload: text
    }
}

export const addComment = (nextComment, id) => {
    return {
        type: ADD_COMMENT,
        payload: { comment: nextComment, id }
    }
}

export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        payload: id
    }
}

export const changeComment = (comment, id) => {
    return {
        type: CHANGE_COMMENT,
        payload: { comment, id }
    }
}

export const loadComments = () => {
    return async dispatch => {
        try {
            dispatch(loadON());
            const result = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10");
            const jsonData = await result.json();

            setTimeout(() => {
                dispatch({
                    type: LOAD_COMMENTS,
                    payload: jsonData
                })
                dispatch(loadOFF());
            }, 3000)
        } catch (error) {
            dispatch(errorON("There is something wrong with your API"))
            dispatch(loadOFF());
        }

    }
}

export const loadON = () => {
    return {
        type: LOAD_ON
    }
}

export const loadOFF = () => {
    return {
        type: LOAD_OFF
    }
}

export const errorON = (errorMessage) => {
    return dispatch => {
        dispatch({
            type: ERROR_ON,
            payload: errorMessage
        })

        setTimeout(() => {
            dispatch(errorOFF())
        }, 2000)
    }

}

export const errorOFF = () => {
    return {
        type: ERROR_OFF
    }
}