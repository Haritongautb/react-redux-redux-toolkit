import { useDispatch, useSelector } from "react-redux";
import { likesIncrement, dislikesIncrement } from "../../actions";
import "./likes.css";

const Likes = () => {
    const dispatch = useDispatch();
    const { likes, dislikes } = useSelector(state => state.likesAndDislikes);

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