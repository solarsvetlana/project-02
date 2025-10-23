import { useEffect, useState } from "react";

export default function EffectExample() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(10);

  function handlePlus() {
    setCount((prev) => prev + 1);
  }

  function generateRandom() {
    setRandom(Math.random() * 10);
  }

  useEffect(() => {
    console.log("Use effect 1, no array");
    // при первом рендере, при любом изменении
  });

  useEffect(() => {
    console.log("Use effect 2, emty dependencies array");
    // только при первом рендере
  }, []);

  useEffect(() => {
    console.log("Use effect 3, with dependency");
    // только при первом рендере, и при изменении указанной зависимости
  }, [random]);

  return (
    <div>
      <h2>EffectExample</h2>
      <p>Count: {count}</p>
      <p>Random: {random}</p>
      <button type="button" onClick={handlePlus}>
        +1
      </button>
      <button type="button" onClick={generateRandom}>
        Generate random
      </button>
    </div>
  );
}

// Component lificycle - жизненный цикл
// 1. mount - рождения - устанивливается на экране первый раз - первый рендер
// 2. update - когда компонент изменяется
// 3. unmount - когда перестает отображться на экране
