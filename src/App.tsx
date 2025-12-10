import { createContext, useEffect, useState } from "react";
import Card from "./components/Card";

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
        <main className="bg-linear-to-r from-bg-color-1 to-bg-color-2 w-screen h-screen flex justify-center items-center">
          <Card {...cards[place - 1]}></Card>

          <button
            className="bg-white p-5 text-xl font-bold rounded-2xl absolute bottom-30 right-2"
            onClick={() => {
              setPlace(1);
            }}
          >
            Új gyakorlás indítása
          </button>
          <button className="bg-white p-5 text-xl font-bold rounded-2xl absolute bottom-10 right-2">
            Új kártya hozzáadása
          </button>
        </main>
      </MainContext.Provider>
    </>
  );
}

export default App;
