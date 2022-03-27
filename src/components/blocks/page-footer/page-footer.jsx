import React from "react";
import PropTypes from "prop-types";
import PageLogo from "../page-logo/page-logo";

const PageFooter = (props) => {
  const {logoLink} = props;

  return (
    <footer className="page-footer">
      <PageLogo link={logoLink} light/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

PageFooter.propTypes = {
  logoLink: PropTypes.string,
};

export default PageFooter;
