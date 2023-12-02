import React from 'react'
import { Item } from './Item'

export const ItemList = ({ products }) => {
    

    return (
        <>
            {products.map((p) => (
                <Item
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    description={p.description}
                    img={p.img}
                    stock={p.stock}
                    price={p.price}
                    category={p.category}
                />
            ))}
        </>
    );
};

/* export default React.memo(ItemList); */
