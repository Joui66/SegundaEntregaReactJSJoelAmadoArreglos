const products = [
        {id: "1" , name: "Producto A", description: "Descripción del producto", img: "", stock: 1, price: "", category: "Comic"},
        {id: "2" , name: "Producto A", description: "Descripción del producto", img: "", stock: 2, price: "", category: "Comic"},
        {id: "3" , name: "Producto A", description: "Descripción del producto", img: "", stock: 3, price: "", category: "Comic"},
        {id: "4" , name: "Producto A", description: "Descripción del producto", img: "", stock: 4, price: "", category: "Manga"},
        {id: "5" , name: "Producto A", description: "Descripción del producto", img: "", stock: 5, price: "", category: "Manga"},
        {id: "6" , name: "Producto A", description: "Descripción del producto", img: "", stock: 6, price: "", category: "Manga"},
        {id: "7" , name: "Producto A", description: "Descripción del producto", img: "", stock: 7, price: "", category: "VideoJuegos"},
        {id: "8" , name: "Producto A", description: "Descripción del producto", img: "", stock: 8, price: "", category: "VideoJuegos"},
        {id: "9" , name: "Producto A", description: "Descripción del producto", img: "", stock: 9, price: "", category: "VideoJuegos"},
];

const getProducts = (() => {
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

const getProductsById = ((id) =>{
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