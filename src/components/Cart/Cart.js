import React from 'react';
import "./Cart.scss";

function Cart (props) {
  const {quantity = 0} = props;
  return (
    <button className="cart">
      <i className="material-icons">shopping_cart</i>
      <hr/>
      {quantity !== 0 && <span className="cart__quantity">{quantity}</span>}
    </button>
  );
}

export default Cart;
