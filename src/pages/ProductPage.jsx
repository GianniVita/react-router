import {useState, useEffect} from 'react';
import axios from 'axios';


const useProduct = () => {
    const [products, setProducts] = useState([]);



    useEffect(() =>{
        axios.get('https://fakestoreapi.com/products')


    })



}




return(
    
    <>
        
        
        
        
        </>
    )



export default function ProductPage()