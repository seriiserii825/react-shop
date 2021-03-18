import React from 'react';
import "./Basket.scss";
import BasketItem from "../BasketItem/BasketItem";

const Basket = (props) => {
  const {orders, toggleBasket, removeFromBasket = Function.prototype, incQuantity, decQuantity} = props;
  
  function getSum () {
    return orders.reduce((sum, current) => {
      return sum + current.price * current.quantity;
    }, 0);
  }
  
  return (
    <ul className="collection basket">
      <li className="collection-item basket__header"><span>Cart:</span>
        <i onClick={toggleBasket} className="material-icons">close</i></li>
      {orders.length > 0 && orders.map(item => {
        return <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity}/>
      })}
      <li className="collection-item basket__footer"><span>Price:</span>
        <span className='basket__price'>{getSum()}</span></li>
    </ul>
  );
};

export default Basket;
