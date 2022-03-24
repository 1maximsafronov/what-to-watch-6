import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Logo = (props) => {
  const {light, href} = props;
  const linkClass = classNames(`logo__link`, {'logo__link--light': light});

  return (
    <div className="logo">
      <a href={href} className={linkClass}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

Logo.propTypes = {
  light: PropTypes.bool,
  href: PropTypes.string
};

export default Logo;
