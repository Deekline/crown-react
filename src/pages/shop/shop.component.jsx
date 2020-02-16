import React, { useState } from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = ( props ) => {
    const [ collection, setCollection ] = useState( SHOP_DATA );


    return (
        <div className='shop-page'>
            { collection.map( ( { id, ...otherCollectionProps } ) => (
                <CollectionPreview key={ id } { ...otherCollectionProps } />
            ) ) }
        </div>
    );
};

export default ShopPage;
