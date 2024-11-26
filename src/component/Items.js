import React, { useState ,useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { FaTruckLoading } from "react-icons/fa";


const Items = () => {
  
  const [ProductDetails ,setDetails] = useState([]);

  const getData =async ()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await  response.json();
    console.log(data);
    setDetails(data);

  }
useEffect(()=>{

  getData();
},[])


  return (
    <div className="items-container">
     {
      ProductDetails.length === 0 ? (<div className="loading">
        PRODUCT IS LOADING <FaTruckLoading />
        </div> ): (ProductDetails.slice(0,8).map((product) => {
        return (
          <div key={product.id} className="product-details">
            <div className="product-image">
              <img src={product.image} alt="Product" />
            </div>
            <div className="product-info">
              <span className="product-name">{product.title}</span>
              <span className="product-heart">
                <FaHeart />
              </span>
            </div>
            <span className="account-message">
              {product.description.slice(0,60)}
            </span>
          </div>
        );
      })
    )

    }
    </div>
  );
};

export default Items;
