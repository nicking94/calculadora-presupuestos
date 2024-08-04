import { useEffect, useState } from "react";
import { moneyFormat } from "../helpers";
const Balance = ({ count, subs, spent, setSpent }) => {
  //funciones
  const updateBalance = () => {
    const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
    setSpent(spent);
  };

  useEffect(() => {
    updateBalance();
  }, [subs]);
  return (
    <div className="flex flex-col justify-center space-y-4 rounded bg-gradient-to-t from-blue-800 to-black p-10 text-white lg:w-1/2">
      <h3 className="flex justify-between text-[1.2rem] font-semibold text-white">
        Presupuesto: <span>{moneyFormat(count)}</span>
      </h3>
      <hr />
      <h3 className="flex justify-between text-[1.2rem] font-semibold">
        Disponible:
        <span className="text-green-300">{moneyFormat(count - spent)}</span>
      </h3>
      <h3 className="flex justify-between text-[1.2rem] font-semibold text-white">
        Gastado: <span className="text-red-500">{moneyFormat(spent)}</span>
      </h3>
    </div>
  );
};

export default Balance;
