import React, {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import Preloader from "./preloader/Preloader";
import GoodsList from "./goods-list/GoodsList";
import Cart from "./Cart/Cart";
import Basket from "./Basket/Basket";

function Shop () {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [isBasketVisible, setBasketVisible] = useState(false);
  
  function incQuantity (orderId) {
    const newOrder = order.map(item => {
      if (item.id === orderId) {
        const newQuantity = item.quantity + 1;
        return {...item, quantity: newQuantity};
      } else {
        return item;
      }
    });
    
    setOrder(newOrder);
  }
  
  function decQuantity (orderId) {
    const newOrder = order.map(item => {
      if (item.id === orderId) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity >= 1 ? newQuantity : 1
        };
      } else {
        return item;
      }
    });
    
    setOrder(newOrder);
  }
  
  function removeFromBasket (id) {
    setOrder(order.filter(item => item.id !== id));
  }
  
  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
    
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (itemIndex === index) {
          return {...orderItem, quantity: orderItem.quantity + 1}
        } else {
          return itemIndex;
        }
      });
      setOrder(newOrder);
    }
  }
  
  function toggleBasket () {
    setBasketVisible(!isBasketVisible);
  }
  
  useEffect(function getGoods () {
    setLoading(true);
    fetch(API_URL, {
      headers: {'Authorization': API_KEY}
    }).then(response => response.json())
      .then(data => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      })
  }, [])
  
  return (
    <main className='container content'>
      <Cart quantity={order.length} toggleBasket={toggleBasket}/>
      <hr/>
      {loading ? <Preloader/> : <GoodsList addToBasket={addToBasket} goods={goods}/>}
      <hr/>
      {isBasketVisible &&
      <Basket decQuantity={decQuantity} incQuantity={incQuantity} removeFromBasket={removeFromBasket} toggleBasket={toggleBasket} orders={order}/>}
    </main>
  );
}

export {Shop};
