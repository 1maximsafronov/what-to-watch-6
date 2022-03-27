import PropTypes from "prop-types";
import React from "react";

const CatalogShowMore = ({onClick, hide}) => {
  if (hide) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button onClick={onClick} className="catalog__button" type="button">
        Show more
      </button>
    </div>
  );
};

CatalogShowMore.propTypes = {
  onClick: PropTypes.func,
  hide: PropTypes.bool,
};

export default CatalogShowMore;
