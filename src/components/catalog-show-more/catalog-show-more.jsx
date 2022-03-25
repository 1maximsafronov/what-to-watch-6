import React from "react";
import PropTypes from "prop-types";

const CatalogShowMore = ({onClick}) => {
  return (
    <div className="catalog__more">
      <button onClick={onClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
};

CatalogShowMore.propTypes = {
  onClick: PropTypes.func
};

export default CatalogShowMore;
