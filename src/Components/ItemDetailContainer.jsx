import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const productos = [
      {id: 1, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 1, Precio: "", Categoria: "Comic"},
      {id: 2, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 2, Precio: "", Categoria: "Comic"},
      {id: 3, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 3, Precio: "", Categoria: "Comic"},
      {id: 4, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 4, Precio: "", Categoria: "Manga"},
      {id: 5, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 5, Precio: "", Categoria: "Manga"},
      {id: 6, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 6, Precio: "", Categoria: "Manga"},
      {id: 7, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 7, Precio: "", Categoria: "VideoJuegos"},
      {id: 8, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 8, Precio: "", Categoria: "VideoJuegos"},
      {id: 9, Titulo: "Producto A", Descripción: "Descripción del producto", Imagen: "", Stock: 9, Precio: "", Categoria: "VideoJuegos"},
  ]

    const getProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject(new Error("No hay datos"))
        }
    })

    getProductos
        .then((res) => {
        })
        .catch((error) => {
            console.log(error)
        })

    return (
        <>
            <ItemDetail
                productos={productos}
            />
        </>
    )
}

export default ItemDetailContainer