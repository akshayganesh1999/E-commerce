import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    return (
        <div className="row">
            {products.map((product) => (
                <div className="col-md-4 mb-4" key={product.id}>
                    <div className="card">
                        <img
                            src={product.thumbnail}
                            className="card-img-top"
                            alt={product.title}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Price: ${product.price}</p>
                            <Link to={`/product/${product.id}`} className="btn btn-primary">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
