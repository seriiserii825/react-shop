import React from 'react';
import "./Basket.scss";
import BasketItem from "../BasketItem/BasketItem";

const Basket = (props) => {
  const {orders} = props;
  return (
    <ul className="collection basket">
      <li className="collection-item">Cart:</li>
      {orders.length > 0 && orders.map(item => {
        return <BasketItem key={item.id} {...item} />
      })}
      <li className="collection-item">Price:</li>
    </ul>
  );
};

export default Basket;
