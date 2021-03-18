import React from 'react';
import "./BasketItem.scss";

function BasketItem ({id, name, price, quantity}) {
  return (
    <li className="collection-item basket-item">
      <h3>{name} x {quantity} = {price}</h3>
    </li>
  );
}

export default BasketItem;
