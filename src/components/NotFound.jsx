import "../css/notfound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 Not Found</h1>
      <p>
        Go back to <Link to="/">HomePage</Link>
      </p>
    </div>
  );
}

export default NotFound;
