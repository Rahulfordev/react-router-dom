/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, username, email } = user;
  return (
    <div className="user__container">
      <div className="user__info">
        <div className="user__content">
          <h3 className="user__name">Name: {name}</h3>
          <h3 className="user__userName">User Name: {username}</h3>
          <h3 className="user__email">Email: {email}</h3>
        </div>
        <Link to={`/users/${id}`}>
          <button>User Details</button>
        </Link>
      </div>
    </div>
  );
};

export default User;
