import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../../data/dummy";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <ul className="okay__side">
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={`${link.path}`}>
                <link.icon />
                <span>{link.title}</span>
              </NavLink>
            </li>
          ))}
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
          {sidebarLinks.map((link, index) => (
            <li className="mobile__side-links" key={index}>
              <NavLink className="linksAncor" to={link.path}>
                <link.icon />
                <span>{link.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
