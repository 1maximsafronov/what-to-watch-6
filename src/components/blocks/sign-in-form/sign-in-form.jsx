import React, {useRef} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {checkEmail} from "utils/common.js";

const SignInForm = (props) => {
  const {className, onSubmit} = props;
  const signInClassName = classNames(`sign-in`, className);

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
    <div className={signInClassName}>
      <form onSubmit={submitHandler} action="#" className="sign-in__form">
        {/* <div className="sign-in__message">
            <p>{errrorMessage}</p>
          </div> */}
        {/* <div className="sign-in__message">
            <p>We can&apos;t recognize this email <br />
            and password combination. Please try again.</p>
          </div> */}
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
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default SignInForm;
