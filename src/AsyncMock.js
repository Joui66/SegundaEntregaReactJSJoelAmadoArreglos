const products = [
        {id: "1" , name: "Batman Año 1", description: "Descripción del producto", img: "", stock: 10, price: "", category: "Comic"},
        {id: "2" , name: "Batman Red Hood", description: "Descripción del producto", img: "", stock: 8, price: "", category: "Comic"},
        {id: "3" , name: "The Killing Joke", description: "Descripción del producto", img: "", stock: 3, price: "", category: "Comic"},
        {id: "4" , name: "Producto A", description: "Descripción del producto", img: "", stock: 7, price: "", category: "Manga"},
        {id: "5" , name: "Producto A", description: "Descripción del producto", img: "", stock: 10, price: "", category: "Manga"},
        {id: "6" , name: "Producto A", description: "Descripción del producto", img: "", stock: 0, price: "", category: "Manga"},
        {id: "7" , name: "Producto A", description: "Descripción del producto", img: "", stock: 4, price: "", category: "VideoJuegos"},
        {id: "8" , name: "Producto A", description: "Descripción del producto", img: "", stock: 13, price: "", category: "VideoJuegos"},
        {id: "9" , name: "Producto A", description: "Descripción del producto", img: "", stock: 6, price: "", category: "VideoJuegos"},
];

export const getProducts = (() => {
    return new Promise ((resolve, reject) => {
        if(products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        }else{
            reject("No hay productos disponibles")
        }
    })
});

export const getProductsById = ((id) =>{
    return new Promise((resolve, reject) => {
        if(products.length > 0) {
            const product =products.find(p=>p.id === id);
            setTimeout(() => {
               if(!product){
                reject(`No se encuentra el producto con el id ${id}`)
               } 
               resolve(product);
            }, 2000);
        }else{
            reject("No se encontro el producto");
        }
    })
})