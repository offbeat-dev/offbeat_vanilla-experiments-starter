import React, { useEffect, useRef } from "react";

export default function useInterval(callback, delay, generate) {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const intervalFunction = () => {
      callbackRef.current();
    };

    if (!delay || !generate) return;
    let interval = setInterval(intervalFunction, delay * 1000);

    return () => clearInterval(interval);
  }, [delay, generate]);
}
