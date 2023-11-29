import React, { useState, useEffect } from 'react';
import { Center } from '@chakra-ui/react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
        {id: 1, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 1, Precio: "", category: "Comic"},
        {id: 2, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 2, Precio: "", category: "Comic"},
        {id: 3, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 3, Precio: "", category: "Comic"},
        {id: 4, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 4, Precio: "", category: "Manga"},
        {id: 5, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 5, Precio: "", category: "Manga"},
        {id: 6, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 6, Precio: "", category: "Manga"},
        {id: 7, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 7, Precio: "", category: "VideoJuegos"},
        {id: 8, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 8, Precio: "", category: "VideoJuegos"},
        {id: 9, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 9, Precio: "", category: "VideoJuegos"},
        ]);
      }, 2000);
    });

    getProducts
      .then((res) => {
        setProductos(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = productos.filter((producto) => producto.category === category);

  return (
    <Center>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList productos={filteredProducts} />
      )}
    </Center>
  );
};

export default ItemListContainer;
