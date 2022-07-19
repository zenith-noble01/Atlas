import { logo } from "../../Images";
import "./StudentNav.scss";
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

const StudentNav = ({ isOpen, setIsOpen }) => {
  console.log(isOpen);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
        <ul>
          <li>
            <BiMoon className="icon" />
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
                <li>
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
