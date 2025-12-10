import Card from "./components/Card";

function App() {
  return (
    <>
      <main className="bg-linear-to-r from-bg-color-1 to-bg-color-2 w-screen h-screen flex justify-center items-center">
        <Card></Card>

        <button className="bg-white p-5 text-xl font-bold rounded-2xl absolute bottom-30 right-2">
          Új gyakorlás indítása
        </button>
        <button className="bg-white p-5 text-xl font-bold rounded-2xl absolute bottom-10 right-2">
          Új kártya hozzáadása
        </button>
      </main>
    </>
  );
}

export default App;
