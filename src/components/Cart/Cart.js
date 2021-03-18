import React from 'react';
import "./Cart.scss";

function Cart (props) {
  const {quantity = 0, toggleBasket = Function.prototype} = props;
  return (
    <button className="cart" onClick={toggleBasket}>
      <i className="material-icons">shopping_cart</i>
      <hr/>
      {quantity !== 0 && <span className="cart__quantity">{quantity}</span>}
    </button>
  );
}

export default Cart;
