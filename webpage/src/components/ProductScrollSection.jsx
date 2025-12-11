import React from 'react';
import ProductCard from './ProductCard';
import './ProductScroll.css';

const ProductScrollSection = ({ products }) => {
    return (
        <div className="product-scroll-container">
            {products.map((product) => (
                <div key={product.id} className="product-scroll-section">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductScrollSection;
