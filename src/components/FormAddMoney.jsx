import { useState, useEffect } from "react";

const FormAddMoney = ({ setCount, setIsValid }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Recuperar el presupuesto desde el localStorage cuando el componente se monta
    const savedCount = localStorage.getItem("count");
    if (savedCount) {
      setInput(savedCount);
    }
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    if (input === "" || Number(input) <= 0) {
      setError(true);
      return;
    }
    setError(false);
    const amount = Number(input);
    setCount(amount);
    setIsValid(true);

    // Guardar el presupuesto en el localStorage
    localStorage.setItem("count", amount);
    localStorage.setItem("isValid", "true"); // Asegurarse de que se marca como válido
  };

  return (
    <div className="flex flex-col justify-center rounded bg-gradient-to-br from-blue-100 to-blue-200 p-10 shadow-sm shadow-blue-200 md:w-[40rem] md:items-center">
      <form
        onSubmit={handleForm}
        className="flex w-full flex-col items-center justify-center space-y-4"
      >
        <p className="text-[1rem] font-semibold text-gray-800 md:text-[2rem]">
          Agrega tu dinero disponible
        </p>
        {error ? (
          <div className="w-full rounded-sm bg-red-600">
            <p className="w-full px-4 text-center font-semibold text-white">
              Presupuesto inválido
            </p>
          </div>
        ) : null}
        <div className="flex flex-col items-center space-x-4 space-y-4">
          <input
            type="number"
            placeholder="$..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-[3rem] rounded-md border-[.1rem] border-blue-800 px-2 shadow-sm shadow-gray-500 outline-none"
          />
          <button
            type="submit"
            className="cursor-pointer rounded bg-blue-800 px-4 py-1 text-[.8rem] italic text-white outline-none transition-all duration-300 hover:bg-blue-700 md:text-[1rem]"
          >
            AGREGAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddMoney;
