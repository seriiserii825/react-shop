import React, {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import Preloader from "./preloader/Preloader";
import GoodsList from "./goods-list/GoodsList";
import Cart from "./Cart/Cart";

function Shop () {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  
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
      <Cart quantity={order.length}/>
      <hr/>
      {loading ? <Preloader/> : <GoodsList goods={goods}/>}
    </main>
  );
}

export {Shop};
