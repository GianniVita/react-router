import {useState, useEffect} from 'react';
import axios from 'axios';


const useProduct = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() =>{
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
                setError(null);
            })
            

    })



}




return(
    
    <>
        
        
        
        
        </>
    )



export default function ProductPage()