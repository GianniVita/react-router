import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => setProduct(response.data))

    }, [id]);

    return (

        <>
            <h1 className='text-center mt-4'>Dettagli del Prodotto</h1>

            <section className="mb-5">
                <div className='container mt-5'>
                    <div className='card mb-5'>
                        <img className='card-img-top' src={product.image} alt="" />
                        <div className='card-body'>
                            <h5 className='card-title'>{product.title}</h5>
                            <p className='card-text'>{product.description}</p>
                            <Link to="/products/" className='btn btn-primary'>Torna ai Prodotti</Link>

                        </div>

                    </div>

                </div>

            </section>



        </>
    );



}