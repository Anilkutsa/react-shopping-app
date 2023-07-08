import React, { useState, useEffect } from 'react'
import './product-details.styles.css';
import { Button } from 'bootstrap';

const ProductDetails = (props) => {
  
  const productId = props.match.params.productId;
  const [product, setProduct] = useState('');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [productId]);

  console.log(props);
  console.log(product);

  return (
    <div className='product-item border main-container'>
      <p className="display-4 mt-3 text-light text-center font-weight-bold border" style={{width: '100%', height: '100px'}}>{product.title}</p>
      <img className="img-main" alt={`product ${product.image}`} src={`${product.image}`} />
      <p className="display-12 mt-2"><b>Category:</b> {product.category}</p>
      <p className="display-12 mt-2"><b>Price:</b> {product.price}</p>
      {/* <p className="display-12 mt-2"><b>Rating:</b> {product.rating}</p>
      <p className="display-12 mt-2"><b>No. of Ratings:</b> {product.rating}</p> */}
      <button class="btn btn-secondary product-details-back-btn" onClick={props.history.goBack}>Go Back</button>
    </div>
  )
}

export default ProductDetails;