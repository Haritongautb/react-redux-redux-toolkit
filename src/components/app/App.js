import { useSelector } from "react-redux";
import PostTitle from "../postTitle/PostTile";
import Likes from "../likes/Likes";
import Comments from "../comments/Comments";
import Spinner from "../spinner/Spinner";
import "./app.css";

function App() {
  const { error } = useSelector(state => state.app);
  return (
    <div className="App">
      <div className="wrap">
        <Spinner />
        {
          error && (
            <div className="error-message">
              {error}
            </div>
          )
        }
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <PostTitle />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
