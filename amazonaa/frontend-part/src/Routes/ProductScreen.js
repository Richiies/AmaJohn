import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { detailsProduct } from '../components/actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'react-loader-spinner';

import "../Routes/index.css";

export default function ProductScreen(props) {
    console.log(props)
    const dispatch = useDispatch();
    const productId = props.match.params.id
    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, products} = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId))
        
       
    }, [dispatch,productId])
       
    return (
        
         <div>
             {loading? <Loader type="spinner"/>: error? <p>{error.message}</p>:<div className = "Productcontainer">
            <Link to="/" >Back </Link>
                <div >
                    <img className = "productsizeing" src = {products.name} alt ={products.name} />

                </div>
                <div className = "details-card">
                    <ul>
                        <li>
                            <h1>
                                {products.name}
                            </h1>
                        </li>
                        <li>
                            <Rating rating = {products.rating} numReviwes = {products.numReviwes} />
                        </li>
                        <li>
                           <p> Price: ${products.price} </p>
                        </li>
                        <li> <p>Description: {products.description}</p>

                        </li>
                    </ul>
                </div>
                <div>
                    <div className="cart-card">

                        <ul>
                            <li><div className="row">
                                    <div>Brand:</div>
                                    <div className="price">{products.brand}

                                    </div>
                                    

                                </div></li>
                            <li>Seller</li>
                            <li></li>
                            <li>
                                <div className="row">
                                    <div>Price:</div>
                                    <div className="price">${products.price}

                                    </div>
                                    

                                </div>

                            </li>
                            <li>
                                <div className="row">
                                    <div>Status:</div>
                                    <div>{products.countInstock >0 ? <span className="success">In Stock</span>: <span className="error">Out of Stock</span>}</div>
                                </div>
                            </li>
                            <li>
                                <button>Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>}
            
            
        </div>
    )
}
