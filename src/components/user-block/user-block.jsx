import React from "react";
import {Link} from "react-router-dom";

const UserBlock = () => {
  const isLogined = true;

  if (!isLogined) {
    return (
      <div className="user-block">
        <Link to="/login" className="user-block__link">Sign in</Link>
      </div>
    );
  }

  const avatar = `img/avatar.jpg`;

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src={avatar} alt="User avatar" width="63" height="63" />
      </div>
    </div>
  );
};

export default UserBlock;
