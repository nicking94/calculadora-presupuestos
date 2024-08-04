import { useState } from "react";

const FormAddSubs = ({
  type,
  setType,
  price,
  setPrice,
  subs,
  setSubs,
  editId,
  setEditId,
  spent,
  setSpent,
  count,
}) => {
  const [error, setError] = useState(false);
  const [errorMoney, setErrorMoney] = useState(false);

  //funciones
  const handleSubs = (e) => {
    e.preventDefault();

    if (type === "" || price === "" || Number(price) <= 0) {
      setError(true);
      return;
    }

    if (count - spent < Number(price)) {
      setErrorMoney(true);
      return;
    }
    setError(false);
    setErrorMoney(false);

    if (editId !== "") {
      setEditId("");
      const newSubs = subs.map((item) => {
        if (item.id === editId) {
          return {
            ...item,
            type: type,
            price: price,
          };
        }
        return item;
      });
      setSubs(newSubs);
    } else {
      const data = {
        type: type,
        price: price,
        id: Date.now(),
      };
      setSubs([...subs, data]);
    }
    setType("");
    setPrice("");
  };

  return (
    <div className="space-y-4 lg:w-1/2">
      <h3 className="text-center text-[1.5rem] font-bold text-gray-800">
        Agregar servicios
      </h3>
      <form onSubmit={handleSubs} className="flex flex-col space-y-2">
        <div className="w-full space-y-4">
          <div className="w-full">
            {error && (
              <div className="w-full rounded-sm">
                <p className="w-full px-4 text-center font-semibold text-red-600">
                  Campos inválidos
                </p>
              </div>
            )}
            <p className="text-[1rem] font-semibold text-gray-800">Servicio</p>
            <select
              onChange={(e) => setType(e.target.value)}
              value={type}
              className="h-[2rem] w-full rounded-lg border-[.1rem] border-blue-200 px-2 shadow-sm shadow-gray-500 outline-none"
            >
              <option value="">Elegir</option>
              <option value="Gas">Gas</option>
              <option value="Luz">Luz</option>
              <option value="Internet">Internet</option>
              <option value="Telefonía">Telefonía</option>
              <option value="Netflix">Netflix</option>
              <option value="DisneyPlus">Disney Plus</option>
              <option value="HboMax">HBO Max</option>
              <option value="StarPlus">Star Plus</option>
              <option value="PrimeVideo">Prime Video</option>
              <option value="Comida">Comida</option>
              <option value="Salud">Salud</option>
              <option value="Gimnasio">Gimnasio</option>
              <option value="Transporte">Transporte</option>
              <option value="Otros">Otros...</option>
            </select>
          </div>
          <div>
            <p className="text-[1rem] font-semibold text-gray-800">
              Costo mensual ($$$)
            </p>
            {errorMoney ? (
              <div className="w-full rounded-sm">
                <p className="mt-4 w-full px-4 text-center font-semibold text-red-600">
                  Presupuesto insuficiente
                </p>
              </div>
            ) : null}
            <input
              type="number"
              placeholder="$..."
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="h-[2rem] w-full rounded-lg border-[.1rem] border-blue-200 px-2 shadow-sm shadow-gray-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded bg-blue-800 px-4 py-2 text-[.8rem] italic text-white outline-none transition-all duration-300 hover:bg-blue-700 lg:text-[1rem]"
          >
            {editId !== "" ? "Guardar" : "Agregar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddSubs;
