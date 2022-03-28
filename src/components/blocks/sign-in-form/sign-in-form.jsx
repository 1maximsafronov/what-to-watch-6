import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {checkEmail} from "utils/common.js";

const SignInForm = (props) => {
  const {className, onSubmit} = props;
  const signInClassName = classNames(`sign-in`, className);
  const [errorMessage, setErrorMessage] = useState(``);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setisPasswordValid] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();


  useEffect(() => {
    if (!isEmailValid) {
      setErrorMessage(`Please enter a valid email address`);
    }

    if (!isPasswordValid) {
      setErrorMessage(`Please enter a valid password`);
    }
  }, [isEmailValid, isPasswordValid]);

  const validate = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setIsEmailValid(checkEmail(email));
    setisPasswordValid(password.length > 3);

    return (checkEmail(email) && password.length > 3);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!validate()) {
      return;
    }

    onSubmit({email, password});
  };

  const emeailFieldClassName = classNames(
      `sign-in__field`, {"sign-in__field--error": !isEmailValid}
  );

  const passwordFieldClassName = classNames(
      `sign-in__field`, {"sign-in__field--error": !isPasswordValid}
  );


  return (
    <div className={signInClassName}>
      <form onSubmit={submitHandler} action="#" className="sign-in__form">
        <div className="sign-in__message">
          <p>{errorMessage}</p>
        </div>
        {/* <div className="sign-in__message">
            <p>We can&apos;t recognize this email <br />
            and password combination. Please try again.</p>
          </div> */}
        <div className="sign-in__fields">
          <div className={emeailFieldClassName}>
            <input ref={emailRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className={passwordFieldClassName}>
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
