import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTitleChange } from "../../actions";
import './postTitle.css';

const PostTitle = () => {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();
    const { postTitle } = useSelector(state => state.postTitleReducer);

    const onSubmitTitle = (event) => {
        event.preventDefault();
        updateTitle();
    }

    const handleChange = (event) => {
        setTitle(title => event.target.value);
    }

    const updateTitle = () => {
        dispatch(postTitleChange(title));
        setTitle(title => "");
    }

    return (
        <div className="card-title">
            <div className="crad-title-top">
                <form onSubmit={onSubmitTitle}>
                    <input type="text" value={title} onChange={handleChange} />
                </form>
            </div>
            <p>
                {postTitle}
            </p>
        </div>
    )
}

export default PostTitle;