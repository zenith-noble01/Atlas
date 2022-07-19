import { Link } from "react-router-dom";

const WhatIsNew = () => {
  return (
    <div className="new__container">
      <p className="new">New</p>
      <div className="new__header">
        <p>
          <Link to="/questionTest">
            Physics <span>June 2022</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default WhatIsNew;
