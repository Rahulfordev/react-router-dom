import { Link, useLoaderData } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
  const {
    id,
    name,
    username,
    email,
    address: { street, suite, city, zipcode },
  } = useLoaderData();

  return (
    <div className="user__details">
      <div className="user__container--one">
        <div className="user__details--container">
          <h3 className="user__details--id">ID: {id}</h3>
          <h3>Name: {name}</h3>
          <h3>userName: {username}</h3>
          <h3>Email: {email}</h3>
          <h3>Street: {street}</h3>
          <h3>Suite: {suite}</h3>
          <h3>City: {city}</h3>
          <h3>ZipCode: {zipcode}</h3>
        </div>
        <Link to={`/users`}>
          <button>Back to All Users</button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
