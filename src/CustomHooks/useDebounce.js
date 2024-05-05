import React, { useEffect, useRef, useState } from "react";
export default function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState();
 const x=useRef();
  useEffect(() => {
    x.current = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(x.current);
  }, [value]);
  return debounceValue;
}
