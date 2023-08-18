import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, changeComment } from "../../actions";

const SingleComment = ({ data }) => {
    const [commentText, setCommentText] = useState("");
    const { comment, id } = data;
    const dispatch = useDispatch();

    useEffect(() => {
        setCommentText(commentText => comment)
    }, [comment])

    const handleChange = (event) => {
        setCommentText(commentText => event.target.value)
    }

    const handleDelete = (event) => {
        event.preventDefault();
        dispatch(deleteComment(id))
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(changeComment(commentText, id))
    }

    return (
        <form className="comments-item" onSubmit={handleUpdate}>
            <div className="comments-item-delete" onClick={handleDelete}>
                &times;
            </div>
            <input type="text" value={commentText} onChange={handleChange} />
            <input type="submit" hidden />
        </form>
    )
}

export default SingleComment;