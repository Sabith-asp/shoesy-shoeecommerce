import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className=" col-6 col-sm-4 col-md-3 p-1 p-md-2">
      <div className="product-card w-100 p-1 rounded-4 text-white">
        <div className="product-image rounded-4 overflow-hidden position-relative">
          <span className="offer position-absolute bg-danger rounded-4 p-1 m-1">
            {item.discount ? `${item.discount}` : "0"}% off
          </span>
          <Link to={`/product/detail/${item.id}`}>
            <img
              src={item.image}
              alt=""
              className="w-100 bg-white h-100 object-fit-cover"
            />
          </Link>
        </div>
        <div>
          <div className="product-title">
            <h6 className="card-title mt-1">{item.title}</h6>
          </div>

          <div className="d-flex justify-content-between">
            <p className="mb-0 fw-bold">₹ {item.price}/-</p>
            <p className="mb-0">{item.color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
