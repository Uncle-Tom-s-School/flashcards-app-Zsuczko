import { createContext, useEffect, useState } from "react";
import Card from "./components/Card";
import CreateCard from "./components/CreateCard";

type CardType = {
  question: string;
  answer: string;
  points: number;
};

export const MainContext = createContext<{
  place: number;
  setPlace: (szam: number) => void;
}>({
  place: 1,
  setPlace: () => {},
});

function App() {
  const [cards, setCards] = useState<CardType[]>([]);

  const [place, setPlace] = useState<number>(1);

  const [add, setAdd] = useState<boolean>(false);

  useEffect(() => {
    // setCards([]);
    fetch("/cards.json")
      .then((res) => res.json())
      .then((items) => {
        setCards(items);
      });
  }, []);

  return (
    <>
      <MainContext.Provider value={{ place, setPlace }}>
        <main className="bg-linear-to-r from-bg-color-1 to-bg-color-2 w-screen h-screen flex flex-col gap-10 justify-center items-center">
          {add ? (
            <CreateCard></CreateCard>
          ) : (
            <>
              <Card {...cards[place - 1]}></Card>
              <div className="w-[25em]">
                <p className="text-white text-center">
                  {place}/{cards.length}
                </p>
                <progress
                  value={place}
                  max={cards.length}
                  className=" bg-green-en"
                ></progress>
              </div>
            </>
          )}
          <button
            className="bg-white p-5 text-xl font-bold rounded-2xl absolute bottom-30 right-2"
            onClick={() => {
              setPlace(1);
              setAdd(false);
            }}
          >
            Új gyakorlás indítása
          </button>
          <button
            className="bg-white p-5 text-xl font-bold rounded-2xl absolute bottom-10 right-2"
            onClick={() => {
              setAdd(true);
            }}
          >
            Új kártya hozzáadása
          </button>
        </main>
      </MainContext.Provider>
    </>
  );
}

export default App;
