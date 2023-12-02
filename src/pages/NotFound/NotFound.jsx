import NotFoundImage from "../../assets/images/not-found-page.gif";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-image">
      <img src={NotFoundImage} alt="" />
    </div>
  );
};

export default NotFound;
