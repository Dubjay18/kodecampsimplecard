import React from "react";
import "./Items.css";
import del from "../../images/icon-delete.svg";

const Items = ({ cart, removeCart }) => {
  if (cart.length === 0 || cart.length === undefined) {
    return (
      <div className="d-flex p-5 text-muted">
        <strong>Your cart is empty</strong>
      </div>
    );
  } else {
    console.log("item", cart);
    return (
      <div>
        {cart.map((item, idx) => {
          return (
            <div className="d-flex">
              <img
                src={item.img_url}
                alt=""
                width={"40px"}
                height={"40px"}
                className="rounded-3"
              />
              <div className="ms-2">
                {" "}
                <p className="min-lh">Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x{item.count} <strong>$375.00</strong>
                </p>
              </div>{" "}
              <div className=" .d-flex align-items-center justify-content-center pt-1 ps-3">
                <img
                  src={del}
                  alt=""
                  width={"20px"}
                  height={"20px"}
                  onClick={() => removeCart(idx)}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Items;
