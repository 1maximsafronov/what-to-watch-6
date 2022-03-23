import React from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";

const PageFooter = (props) => {
  const {children, logoLink} = props;

  return (
    <footer className="page-footer">
      <Logo href={logoLink} light/>
      {children}
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

PageFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  logoLink: PropTypes.string,
};


export default PageFooter;
