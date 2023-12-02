/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="post__container">
      <div className="post__content">
        <h3 className="post__id">ID: {id}</h3>
        <h3 className="post__title">Title: {title}</h3>
        <p className="post__body">Body: {body}</p>
      </div>
      <Link to={`/posts/${id}`}>
        <button>Posts Details</button>
      </Link>
    </div>
  );
};

export default Post;
