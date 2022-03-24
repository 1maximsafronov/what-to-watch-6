import React from "react";

const UserBlock = () => {
  const isLogined = true;

  if (!isLogined) {
    return (
      <div className="user-block">
        <a href="sign-in.html" className="user-block__link">Sign in</a>
      </div>
    );
  }

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </div>
  );
};

export default UserBlock;
