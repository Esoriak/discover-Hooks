import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  return (
    <div>

      <p>La valeur de départ est à :</p>
      <input type="number" value={count} name="setValue" />
      <button onClick={() => setCount(count + 12)}>
        On additionne
      </button>
      <button onClick={() => setCount(count - 4)}>
         et on soustraie !
      </button>
    </div>
  );
}

export default Counter;