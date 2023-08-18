import { errorOn } from "../reducers/appSlice";
import { addComment, changeComment } from "../reducers/commentsSlice";

const badWords = ['motherFucker', 'asshole'];

const spamFilter = (store) => {
    return next => {
        return action => {
            if (action.type === changeComment().type || action.type === addComment().type) {
                const hasBadWords = badWords.some(res => action.payload.comment.toLowerCase().includes(res));
                if (hasBadWords) {
                    return store.dispatch(errorOn('Be good boy!'));
                }
            }
            return next(action);
        }
    }
}

export default spamFilter;