import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import "./PostDetails.css";

const PostDetails = () => {
  const { userId, id, title, body } = useLoaderData();
  return (
    <div className="posts__details">
      <div className="psots__detail--one">
        <div className="post__details--container">
          <h3 className="post__details--id">User ID: {userId}</h3>
          <h3 className="post__details--id">ID: {id}</h3>
          <h3 className="post__details--title">Title: {title}</h3>
          <h3 className="post__details__body">Body: {body}</h3>
        </div>
        <Link to={`/posts`}>
          <button>Back to All Posts</button>
        </Link>
      </div>
    </div>
  );
};

export default PostDetails;
