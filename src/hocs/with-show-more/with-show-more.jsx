import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import ShowMoreButton from "components/blocks/catalog/show-more/show-more";


const withShowMore = (Component) => {
  const WithShowMore = (props) => {
    const {items} = props;
    const itemsCount = items.length;

    const [showingItems, setShowingItems] = useState(
        Math.min(8, itemsCount)
    );

    const isBtnShown = showingItems < itemsCount;

    useEffect(() => {
      setShowingItems(Math.min(8, itemsCount));
    }, [items]);

    const showMoreBtnClickHandler = () =>{
      const newShowingCards = Math.min(showingItems + 20, itemsCount);
      setShowingItems(newShowingCards);
    };

    return (
      <Component
        {...props}
        items={items.slice(0, showingItems)}
        renderShowMoreBtn={() => (
          <ShowMoreButton
            onClick={showMoreBtnClickHandler}
            hide={!isBtnShown}
          />
        )}
      />
    );
  };

  WithShowMore.propTypes = {
    items: PropTypes.array,
  };

  return WithShowMore;
};

export {withShowMore};
