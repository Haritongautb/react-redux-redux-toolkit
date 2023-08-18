import { CHANGE_COMMENT, ADD_COMMENT } from "../types/types";
import { errorON } from "../actions";

const badWords = ['motherFucker', 'asshole'];

const spamFilter = ({ dispatch }) => {
    return next => {
        return action => {
            if (action.type === CHANGE_COMMENT || action.type === ADD_COMMENT) {
                const hasBadWords = badWords.some(res => action.payload.comment.toLowerCase().includes(res));

                if (hasBadWords) {
                    return dispatch(errorON('Be good boy!'));
                }
            }
            return next(action);
        }
    }
}

export default spamFilter;