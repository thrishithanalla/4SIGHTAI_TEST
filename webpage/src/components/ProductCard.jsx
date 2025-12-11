import React from 'react';
import { Link } from 'react-router-dom';
import './ProductScroll.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card-snap">
            <div className="product-card-content">
                <h2 className="product-card-title">{product.title}</h2>

                <div className="product-summary-label">PRODUCT SUMMARY</div>

                <p className="product-description">
                    {product.desc}
                    <br /><br />
                    {/* Placeholder for "Essence of..." text if needed */}
                    The Essence of {product.title}
                    <br />
                    {product.desc}
                    {/* Repeating desc to match the visual length in reference or we can truncate/expand */}
                </p>

                <Link to={`/products?id=${product.id}`} className="read-more-link">
                    READ MORE
                    <span>&rarr;</span>
                </Link>
            </div>

            <div className="product-card-image">
                <img src={product.img} alt={product.alt} loading="lazy" />
                {/* We can add overlay tech UI elements here later if needed */}
            </div>
        </div>
    );
};

export default ProductCard;
