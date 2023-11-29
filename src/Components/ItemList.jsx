import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {

    return (
        <>
            {productos.map((p) => (
                <Item
                    key={p.id}
                    id={p.id}
                    Titutlo={p.Titulo}
                    Descripción={p.Descripción}
                    Imagen={p.Imagen}
                    Stock={p.Stock}
                    Precio={p.Precio}
                    category={p.category}
                />
            ))}
        </>
    );
};

export default React.memo(ItemList);
