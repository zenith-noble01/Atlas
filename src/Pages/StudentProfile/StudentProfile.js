import "./StudentProfile.scss";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProfileArchivement, ProfileInsight } from "../../Components";

const StudentProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //getStudent localStorage
    const student = localStorage.getItem("student");
    if (!student) {
      navigate("/register");
    }
  }, [navigate]);

  const user = useSelector((state) => state.auth?.student);
  const { username, email } = user;

  return (
    <div className="app__studentProfile default__outlet">
      <div className="header__profile">
        <div className="header__profile__avatar__profile">
          <img src="https://via.placeholder.com/150" alt="avatar" />
          <div className="header__profile__avatar__name">
            <p>
              {username}
              <span>{email}</span>
            </p>
            <Link to="/studentEdit">Edit profile</Link>
          </div>
        </div>
        <button>
          <Link to="/studentEdit">Settings</Link>
        </button>
      </div>

      <div className="profile__content">
        <ProfileInsight />
        <ProfileArchivement />
      </div>
    </div>
  );
};

export default StudentProfile;
