import { useState } from "react";

const Card = () => {
  const [flipped, setFlipped] = useState<boolean>(true);
  return (
    <div className="card-wrapper">
      <div
        className={flipped ? "card" : "card faceDown"}
        onClick={() => {
          setFlipped((prev) => !prev);
        }}
      >
        <div className="w-[20em] h-[15em] bg-green-en text-white flex justify-center items-center front">
          Mi a különbség?
        </div>
        <div className="w-[20em] h-[15em] bg-green-en text-white flex justify-center items-center back">
          Másik oldal
        </div>
      </div>
    </div>
  );
};

export default Card;
