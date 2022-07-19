import "./Sidebar.scss";
import {
  MdOutlineFeedback,
  MdOutlineDashboard,
  MdContactSupport,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { HiOutlineDuplicate } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { FiBook } from "react-icons/fi";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <ul className="okay__side">
          <li>
            <NavLink to="/">
              <MdOutlineDashboard />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/questionTest">
              <HiOutlineDuplicate />
              <span>Question Test</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/books">
              <SiBookstack />
              <span>Books</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/oppurtunities">
              <FiBook />
              <span>Oppurtunities</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedbacks">
              <MdOutlineFeedback className="icon" />
              <span>Feebacks</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/support">
              <MdContactSupport className="icon" />
              <span>Support</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="mobile__side__container">
          <ul className="mobile__side" onClick={() => setIsOpen(false)}>
            <li>
              <NavLink to="/">
                <MdOutlineDashboard />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/questionTest">
                <HiOutlineDuplicate />
                <span>Question Test</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/books">
                <SiBookstack />
                <span>Books</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/oppurtunities">
                <FiBook />
                <span>Oppurtunities</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/feedbacks">
                <MdOutlineFeedback className="icon" />
                <span>Feebacks</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/support">
                <MdContactSupport className="icon" />
                <span>Support</span>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
