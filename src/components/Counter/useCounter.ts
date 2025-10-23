import { useState } from "react";

export default function useCounter(start: number) {
  const [count, setCount] = useState(start);
  const [secretNumber, setSecretNumber] = useState(-3);
  function handlePlus() {
    setCount((prev) => prev + 1);
  }

  function handleMinus() {
    setCount((prev) => prev - 1);
  }

  function handleClear() {
    setCount(0);
  }

  function finishGame() {
    setCount(0);
    setSecretNumber(Math.floor(Math.random() * 20) - 10);
    console.log(secretNumber);
  }
  return {
    count,
    secretNumber,
    finishGame,
    handleClear,
    handlePlus,
    handleMinus,
  };
}
