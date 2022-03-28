import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {login} from "store/api-actions";

import PageHeader from "../../blocks/page-header/page-header";
import PageFooter from "../../blocks/page-footer/page-footer";
import SignInForm from "../../blocks/sign-in-form/sign-in-form";


const LoginPage = (props) => {
  const {onSubmit} = props;

  return (
    <div className="user-page">
      <PageHeader className="user-page__head" hideUserBlock>
        <h1 className="page-title user-page__title">Sign in</h1>
      </PageHeader>

      <SignInForm
        className="user-page__content"
        onSubmit={(loginData) => onSubmit(loginData)}
      />

      <PageFooter/>
    </div>
  );
};

LoginPage.propTypes = {
  onSubmit: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(loginData) {
    dispatch(login(loginData));
  }
});

export default connect(null, mapDispatchToProps)(LoginPage);
