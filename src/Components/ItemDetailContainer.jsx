import { useEffect, useState } from "react"
import { getProductsById } from "../asyncMock";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect( () => { 
      getProductsById(id)
        .then(resp => setItem(resp))
        .catch(error => console.log(error));
        
     }, [id])
  return (
    <>
    {item && <ItemDetail p={item} />}
    </>
  )
}