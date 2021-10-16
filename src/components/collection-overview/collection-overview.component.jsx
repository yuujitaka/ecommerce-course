import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import "./collection-overview.styles.scss";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionForPreview);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...props }) => (
        <PreviewCollection key={id} {...props} />
      ))}
    </div>
  );
};

export default CollectionOverview;
