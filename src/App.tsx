import React, { useState } from "react";

const App: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | string>(
    "aguardando..."
  );

  const getRandomNumberInRange = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <>
      <main>
        <h1>Sorteio da rifa</h1>

        <h4>O número sorteado foi</h4>
        <h2>{selectedNumber}</h2>
      </main>

      <button onClick={() => setSelectedNumber(getRandomNumberInRange(1, 300))}>
        Sortear
      </button>

      <footer>
        <p>Sistema 100% confiável. Código fonte em <a href="https://github.com/MatheusRoichman/sorteio-rifa" target="_blank" rel="noopener noreferrer">https://github.com/MatheusRoichman/sorteio-rifa</a></p>
        <p>Programador: <a href="https://github.com/MatheusRoichman" target="_blank" rel="noopener noreferrer">Matheus Lima Roichman</a></p>
      </footer>
    </>
  );
};

export default App;
