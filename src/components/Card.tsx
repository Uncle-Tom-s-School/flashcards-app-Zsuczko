import { useContext, useState } from "react";
import { MainContext } from "../App";

const Card = (prop: { points: number; question: string; answer: string }) => {
  const [flipped, setFlipped] = useState<boolean>(true);

  const { place, setPlace } = useContext(MainContext);

  function nextPlace() {
    if (place < 12) setPlace(place + 1);
  }

  return (
    <div className="card-wrapper">
      <div
        className={flipped ? "card" : "card faceDown"}
        onClick={() => {
          setFlipped((prev) => !prev);
        }}
      >
        <div
          className={`w-[25em] h-[20em] ${
            prop.points > 0
              ? "bg-green-en"
              : prop.points === 0
              ? "bg-white"
              : "bg-red-en"
          } ${
            prop.points === 0 ? "text-black" : "text-white"
          } flex justify-center items-center front`}
        >
          {prop.question}
        </div>
        <div className="w-[25em] h-[20em] bg-white flex justify-between items-center back relative flex-col pt-16 pb-10 pr-4 pl-4">
          <div className="absolute w-full bg-green-en top-0 left-0  flex justify-center p-1 font- text-white">
            {place}
          </div>
          <div className="text-center font-bold">{prop.answer}</div>
          <div className="flex justify-between gap-20">
            <div className="flex flex-col gap-3 items-center">
              <p className="text-green-en">Sikerült</p>
              <button
                className="bg-green-en rounded-[50%] text-white w-16 h-16 flex justify-center items-center text-5xl"
                onClick={() => {
                  nextPlace();
                }}
              >
                <i className="fa-regular fa-circle-check"></i>
              </button>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <p className="text-red-en">Nem sikerült</p>
              <button
                className="bg-red-en rounded-[50%] text-white w-16 h-16 flex justify-center items-center text-5xl"
                onClick={() => {
                  nextPlace();
                }}
              >
                <i className="fa-regular fa-circle-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
