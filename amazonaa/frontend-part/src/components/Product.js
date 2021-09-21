import React from 'react'
import Rating from './Rating'


export default function Product(props) {
    const {product} = props
    
    return (
        <div key = {product._id} className="card">
              <a href={`/api/products/${product._id}`}>
                
                <img className="medium" src={product.image} alt={product.brand} />
              </a>
              <div className="card-body">
                <a href={`/product/${product._id}`}>
                  <h2>{product.brand}</h2>
                </a>
                <Rating rating = {product.rating} numReviwes= {product.numReviwes}  />
                
                <div className="price">${product.price}</div>
              </div>
            </div>
    )
}
