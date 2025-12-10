const CreateCard = () => {
  return (
    <div className="p-5 bg-white flex flex-col justify-center items-center gap-10 rounded-2xl">
      <div className=" flex gap-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl font-bold">Kérdés</h1>
          <textarea
            name=""
            id=""
            className="border-2 border-gray-300 w-[20em] h-[10em]"
            placeholder="Kérdés..."
          ></textarea>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl font-bold">Válasz</h1>
          <textarea
            name=""
            id=""
            className="border-2 border-gray-300 w-[20em] h-[10em]"
            placeholder="Válasz..."
          ></textarea>
        </div>
      </div>
      <button className="bg-green-en rounded-4xl p-2 text-white w-fit">
        <i className="fa-solid fa-plus"></i>
        Hozzáadás
      </button>
    </div>
  );
};

export default CreateCard;
