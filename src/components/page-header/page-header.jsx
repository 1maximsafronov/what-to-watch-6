import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import PageLogo from "../page-logo/page-logo";
import UserBlock from "../user-block/user-block";

const PageHeader = ({className, children, hideUserBlock}) => {
  const headerClassName = classNames(`page-header`, className);

  return (
    <header className={headerClassName}>
      <PageLogo />
      {children}
      {!hideUserBlock && <UserBlock />}
    </header>
  );
};

PageHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ]),
  hideUserBlock: PropTypes.bool,
  className: PropTypes.string,
};

export default PageHeader;
