import "./Hamburger.scss";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <div className="hamburgerMenu" onClick={() => setIsOpen(!isOpen)}>
      <p className={isOpen ? "p isOpen" : "p"}></p>
      <p className={isOpen ? "p isOpen" : "p"}></p>
      <p className={isOpen ? "p isOpen" : "p"}></p>
    </div>
  );
};

export default Hamburger;
