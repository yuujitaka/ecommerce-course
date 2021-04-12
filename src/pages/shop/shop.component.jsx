import React, { useState } from 'react';
import Data from './data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

const ShopPage = () => {
  const [collections, setCollections] = useState(Data);

  return(
    <div className='shop-page'>
      {collections.map(({ id, ...props}) => (
        <PreviewCollection key={id} {...props} />
      ))}
    </div>
  )
}

export default ShopPage;