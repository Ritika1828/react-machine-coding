import React, { useState, useEffect, useCallback } from "react";
const api_url = `https://dummyjson.com/products/search`;
import useDebounce from "../CustomHooks/useDebounce";
import styles from "./index.module.scss";

// comp mount --> delayFetch --> debounce --> let timeout
// r
// comp mount --> delayFetch --> debounce --> timeout = y , 10 sec --> callbackqueue
// ri
// comp mount --> delayFetch --> debounce --> timeout = x , 10 sec --> callbackqueue
// comp mount --> delayFetch --> debounce --> timeout = x , 10 sec --> callbackqueue
// comp mount --> delayFetch --> debounce --> timeout = x , 10 sec --> callbackqueue
// comp mount --> delayFetch --> debounce --> timeout = x , 10 sec --> callbackqueue
// comp mount --> delayFetch --> debounce --> timeout = x , 10 sec --> callbackqueue

/////
// comp mount --> delayFetch() --> api --> let timeout x ,
//

const debounce = (func, delay) => {
  console.log(delay, "delay");
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default function Autocomplete() {
  const [searchedProduct, setSearchedProduct] = useState("");
  const [products, setProducts] = useState([]);
  const value = useDebounce(searchedProduct, 500);
  console.log("debounce", value);
  function fetchProducts(products) {
    fetch(`${api_url}?q=${products}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (value) {
      // delayFetch(searchedProduct);
      fetchProducts(value); //from hook
    }
  }, [value]);

  const delayFetch = useCallback(debounce(fetchProducts, 500), []);
  // const delayFetch = debounce(fetchProducts, 500);
  

  return (
    <div className={styles.container}>
      <h3>Autocomplete</h3>
      <input
        className={styles.inputBox}
        type="text"
        placeholder="search products"
        value={searchedProduct}
        // onChange={(e) => delayFetch(e.target.value)}
        onChange={(e) => setSearchedProduct(e.target.value)}
      />
      <ul className={styles.list}>
        {products.map((product) => (
          <div className={styles.product}>{product.title}</div>
        ))}
      </ul>
    </div>
  );
}
