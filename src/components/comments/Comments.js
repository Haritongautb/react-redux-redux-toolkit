import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { addComment, loadComments } from "../../actions";
import SingleComment from "../singleComment/SingleComment";
import "./comments.css";

const Comments = () => {
    const [comment, setComment] = useState("");
    const { comments } = useSelector(state => state.commentsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadComments())
    }, [])

    const handleChange = (event) => {
        setComment(comment => event.target.value);
    }

    const handleNextComment = (event) => {
        event.preventDefault();
        updateComments();
    }

    const renderComments = (arr) => {
        if (!arr.length) {
            return <div>Currently you have no comments</div>
        }

        return arr.map(item => {
            return (
                <SingleComment key={item.id} data={item} />
            )
        })
    }

    const updateComments = () => {
        const nextCommentID = uniqid();
        dispatch(addComment(comment, nextCommentID))
        setComment(comment => "");
    }

    const items = renderComments(comments);

    return (
        <div className="card-comments">
            <form className="comments-item-create" onSubmit={handleNextComment}>
                <input type="text" value={comment} onChange={handleChange} />
                <input type="submit" hidden />
            </form>
            {
                items
            }
        </div>
    )
}

export default Comments;