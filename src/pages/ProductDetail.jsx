import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <>
            <div className="container mt-4" style={{width:"500px"}}>
                <Link to="/" className="btn btn-secondary mb-3">
                    Back to Home
                </Link>
                <div className="card">
                    <img
                        src={product.thumbnail}
                        className="card-img-top"
                        alt={product.title}
                        style={{height:"500px", width:"500px"}}
                    />
                    <div className="card-body">
                        <h1 className="card-title">{product.title}</h1>
                        <p className="card-text">Price: ${product.price}</p>
                        <p className="card-text">Description: {product.description}</p>
                        <p className="card-text">Category: {product.category}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
