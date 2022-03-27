import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getAuthorizationStatus, getUserInfo} from "store/user-data/selector";
import {AuthorizationStatus} from "const";

const UserBlock = (props) => {
  const {authorizationStatus, userInfo} = props;
  const isLogined = authorizationStatus === AuthorizationStatus.AUTH;

  if (!isLogined) {
    return (
      <div className="user-block">
        <Link to="/login" className="user-block__link">Sign in</Link>
      </div>
    );
  }


  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <Link to="/mylist">
          <img src={userInfo[`avatar_url`]} alt="User avatar" width="63" height="63" />
        </Link>
      </div>
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string,
  userInfo: PropTypes.object
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
});

export default connect(mapStateToProps, null)(UserBlock);
