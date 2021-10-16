import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect, useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = () => {
  const collection = useSelector(selectCollection);

  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
