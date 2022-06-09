import React from "react";
import "../Product/product.css";
import data from "../News/News"
const Product = ({ author, content, description, urlToImage }) => {

  console.log(author, content, description, urlToImage)
  return (
    <div className="product">
      <div className="product_info">
       
        <p>{data.content}</p>
        <p>{data.description}</p>
        <p>{data.urlToImage}</p>
      </div>
    </div>
  );
};

export default Product;
