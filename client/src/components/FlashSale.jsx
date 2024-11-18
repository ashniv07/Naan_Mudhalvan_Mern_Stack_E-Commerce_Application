import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/FlashSale.css';

const FlashSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchFlashSaleProducts();
  }, []);

  const fetchFlashSaleProducts = async () => {
    try {
      const response = await axios.get('http://localhost:6001/flash-sale-products'); // Replace with your API endpoint
      setProducts(response.data); // Assuming the API returns an array of products
    } catch (error) {
      console.error('Error fetching flash sale products:', error);
    }
  };

  return (
    <div className="flashSaleContainer">
      <h3>Flash Sale</h3>
      <div className="flashSale-body">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="flashSaleCard" key={product.id}>
              <img src={product.mainImg} alt={product.title} />
              <div className="flashSaleCard-data">
                <h6>{product.title}</h6>
                <p>{product.description}</p>
                <h5>{product.discount}% off</h5>
              </div>
            </div>
          ))
        ) : (
          <p>No products available for the flash sale!</p>
        )}
      </div>
    </div>
  );
};

export default FlashSale;
