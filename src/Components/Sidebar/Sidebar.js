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
import { CgTranscript } from "react-icons/cg";
import { GiTestTubes } from "react-icons/gi";

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
            <NavLink to="/grades">
              <CgTranscript className="icons__icon" />
              <span>Grades</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/maketest">
              <GiTestTubes className="icons__icon" />
              <span>Make A Test</span>
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

      <div className="mobile__side__container">
        <ul
          className="mobile__side"
          style={{
            left: isOpen ? "0" : "-100%",
          }}
          onClick={() => setIsOpen(false)}
        >
          <li className="mobile__side-links">
            <NavLink className="linksAncor" to="/">
              <MdOutlineDashboard />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="mobile__side-links">
            <NavLink className="linksAncor" to="/questionTest">
              <HiOutlineDuplicate />
              <span>Question Test</span>
            </NavLink>
          </li>
          <li className="mobile__side-links">
            <NavLink className="linksAncor" to="/books">
              <SiBookstack />
              <span>Books</span>
            </NavLink>
          </li>
          <li className="mobile__side-links">
            <NavLink className="linksAncor" to="/oppurtunities">
              <FiBook />
              <span>Oppurtunities</span>
            </NavLink>
          </li>
          <li className="mobile__side-links">
            <NavLink className="linksAncor" to="/feedbacks">
              <MdOutlineFeedback className="icon" />
              <span>Feebacks</span>
            </NavLink>
          </li>
          <li className="mobile__side-links">
            <NavLink className="linksAncor" to="/support">
              <MdContactSupport className="icon" />
              <span>Support</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
