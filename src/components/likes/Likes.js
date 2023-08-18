import { useDispatch, useSelector } from "react-redux";
import { likesIncrement, dislikesIncrement } from "../../reducers/likesSlice";
import "./likes.css";

const Likes = () => {
    const dispatch = useDispatch();
    const { likes, dislikes } = useSelector(state => state.likes);

    const onLikes = () => {
        dispatch(likesIncrement());
    }

    const onDislikes = () => {
        dispatch(dislikesIncrement());
    }

    return (
        <div className="button-controls">
            <button onClick={onLikes}>❤ {likes}</button>
            <button onClick={onDislikes}>Dislike {dislikes}</button>
        </div>
    )
}

export default Likes;