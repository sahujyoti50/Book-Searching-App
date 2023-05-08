import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="body">
      <Link to="/home" className="tab">
        Home
      </Link>
      <Link to="/search" className="tab">
        Search
      </Link>
      <Link to="/addtosave" className="tab">
        AddToSave
      </Link>
    </div>
  );
};
export default WelcomePage;
