import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const PageLogo = (props) => {
  const {link, light} = props;

  const linkClass = classNames(`logo__link`, {"logo__link--light": light});

  return (
    <div className="logo">
      <a href={link} className={linkClass}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

PageLogo.propTypes = {
  link: PropTypes.string,
  light: PropTypes.bool,
};

export default PageLogo;
