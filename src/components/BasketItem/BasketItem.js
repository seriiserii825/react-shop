import React from 'react';
import "./BasketItem.scss";

function BasketItem ({id, name, price, quantity, removeFromBasket, incQuantity, decQuantity}) {
  return (
    <li className="collection-item basket-item">
      <span className="basket-item__title">{name}</span> <span className="basket-item__buttons">
        <i onClick={() => decQuantity(id)} className="material-icons basket-item__btn">remove</i> x <i onClick={() => incQuantity(id)} className="material-icons basket-item__btn">add</i> {quantity} = {price}
      </span> <i onClick={() => removeFromBasket(id)} className="material-icons close">close</i>
    </li>
  );
}

export default BasketItem;
