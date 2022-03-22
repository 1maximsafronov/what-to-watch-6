import React from "react";
import PropTypes from "prop-types";

const Logo = (props) => {
  const {light, href} = props;
  const lightClass = light ? `logo__link--light` : ``;

  return (
    <div className="logo">
      <a href={href} className={`logo__link ${lightClass}`}>
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
