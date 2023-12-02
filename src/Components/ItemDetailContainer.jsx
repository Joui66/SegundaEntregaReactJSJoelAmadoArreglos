import { useEffect, useState } from "react"
import { getProductById } from "../AsyncMock";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect( () => { 
      getProductById(id)
        .then(resp => setItem(resp))
        .catch(error => console.log(error));
        
     }, [])
  return (
    <>
    {item && <ItemDetail {...item} />}
    </>
  )
}

export default ItemDetailContainer