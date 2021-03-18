import React from 'react';
import "./GoodsItem.scss";

const GoodsItem = (props) => {
  return (
    <div className="goods-item">
      <img src={props.displayAssets[0].url} alt=""/>
      <h2>{props.displayName}</h2>
      <p>{props.displayDescription}</p>
      <span>Цена: <strong>{props.price.finalPrice}</strong> руб.</span>
      <button onClick={() => props.addToBasket({id: props.mainId, name: props.displayName, price: props.price.regularPrice})}>Купить</button>
    </div>
  );
};

export default GoodsItem;
