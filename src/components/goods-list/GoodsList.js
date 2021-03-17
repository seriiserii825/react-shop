import React from 'react';
import "./goods-list.scss";
import GoodsItem from "../goods-item/GoodsItem";

const GoodsList = ({goods = []}) => {
  return (
    <div className="goods-list">
      {goods.length ? goods.map(good => {
        return <GoodsItem key={good.mainId} {...good} />
      }) : <h2>Nothing not found..</h2>}
    </div>
  );
};

export default GoodsList;
