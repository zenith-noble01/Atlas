import { logo } from "../../Images";
import "./StudentNav.scss";
import { useDispatch } from "react-redux";
import {
  BiMoon,
  BiBell,
  BiChevronDown,
  BiSearch,
  BiUser,
} from "react-icons/bi";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { MdPowerSettingsNew } from "react-icons/md";
import { toggleTheme } from "../../redux/reducers/theme";

const StudentNav = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="student__nav">
      <div className="see__data">
        <GiHamburgerMenu
          onClick={() => setIsOpen(!isOpen)}
          className="hamburger"
        />
        <div className="st__logo">
          <img src={logo} alt="" />
        </div>
        <div className="input__data">
          <BiSearch className="icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="content__nav">
        <ul className="content__nav__items">
          <li>
            <BiMoon className="icon" onClick={handleThemeChange} />
          </li>
          <li>
            <BiBell className="icon" />
          </li>
          <li onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            My Account{" "}
            <span>
              <BiChevronDown
                className={isDropdownOpen ? "chev rotate" : "chev"}
              />
            </span>
            <div className={isDropdownOpen ? "dropdown" : "dropdown hide"}>
              <ul>
                <li className="dropdown__one">
                  <NavLink to="/profile">
                    <BiUser />
                    <span>Profile</span>
                  </NavLink>
                </li>
                <li className="logout">
                  <MdPowerSettingsNew />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentNav;
