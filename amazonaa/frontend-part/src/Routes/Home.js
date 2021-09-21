import React, { useEffect } from 'react'

import Loader from "react-loader-spinner";
import {useDispatch, useSelector } from 'react-redux';
import Product from "../components/Product";
import { listProducts } from '../components/actions/productActions';

export default function Home() {
  const dispatch = useDispatch();
   const productList = useSelector(state => state.productList);
   const {loading, error, products} = productList
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])
    return (
      
        <div>
          {loading?<Loader type="Rings" color="#00BFFF" height={80} width={80} timeout={3000} className="row center" />:error? <p>{error.msg}</p>:<div className="row center">
            {products.map(product=>(
              <Product key = {product._id} product = {product} />

            ))}
            </div>}
          
        </div>
    )
}
