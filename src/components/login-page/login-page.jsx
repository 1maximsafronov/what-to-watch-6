import React, {useRef} from "react";
import PageFooter from "../page-footer/page-footer";
import PageHeader from "../page-header/page-header";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";

const checkEmail = (email) => {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let address = email;
  if (reg.test(address) === false) {
    return false;
  }

  return true;
};

const LoginPage = (props) => {
  const {onSubmit} = props;
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (checkEmail(email) && password.length > 3) {
      onSubmit({
        email,
        password
      });
    }
  };

  return (
    <div className="user-page">
      <PageHeader className="user-page__head" hideUserBlock>
        <h1 className="page-title user-page__title">Sign in</h1>
      </PageHeader>

      <div className="sign-in user-page__content">
        <form onSubmit={submitHandler} action="#" className="sign-in__form">
          <div className="sign-in__message">
            <p>Please enter a valid email address</p>
          </div>
          <div className="sign-in__message">
            <p>We can&apos;t recognize this email <br />
            and password combination. Please try again.</p>
          </div>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={emailRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

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
