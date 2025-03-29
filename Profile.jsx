
import { Link } from "react-router-dom";

import "./Profile.css";
const Profile = () => {



  return (
    <>


      <div className="main-profile">
        <div className="profile">
          <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/login"><li>Login</li></Link>
          <Link to="/signup"><li>SignUp</li></Link>
            <li>Logout</li>
            <Link to="/contact"><li>Contact Us</li></Link>
            <li>About Us</li>
     
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
