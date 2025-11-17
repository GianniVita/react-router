import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';


const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() =>{
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
                setError(null);
            })
            .catch(err =>{
                console.error("Errore nel recupero:", err);
                setError("Non è stato possibile caricare i prodotti.");

            })

    })


    return {products, error}

};


export default useProducts;