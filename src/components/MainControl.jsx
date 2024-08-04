import { useState, useEffect } from "react";
import FormAddSubs from "./FormAddSubs";
import DisplayItems from "./DisplayItems";
import Balance from "./Balance";

const MainControl = ({ count, setCount }) => {
  const [subs, setSubs] = useState([]);
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState("");
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const savedSubs = localStorage.getItem("subs");
    if (savedSubs !== null) {
      setSubs(JSON.parse(savedSubs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("subs", JSON.stringify(subs));
  }, [subs]);

  const eliminarItem = (id) => {
    const newList = subs.filter((item) => item.id !== id);
    setSubs(newList);
  };

  const editItem = (id) => {
    setEditId(id);
    subs.forEach((item) => {
      if (item.id === id) {
        setType(item.type);
        setPrice(item.price);
      }
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center space-y-8 rounded bg-gradient-to-br from-blue-100 to-blue-200 p-2 shadow-sm shadow-blue-200 lg:w-[60rem] lg:flex-row lg:space-x-8 lg:space-y-0 lg:p-10">
        <Balance count={count} subs={subs} spent={spent} setSpent={setSpent} />
        <FormAddSubs
          setType={setType}
          setPrice={setPrice}
          type={type}
          price={price}
          subs={subs}
          setSubs={setSubs}
          editId={editId}
          setEditId={setEditId}
          spent={spent}
          setSpent={setSpent}
          count={count}
        />
      </div>
      <DisplayItems
        subs={subs}
        eliminarItem={eliminarItem}
        editItem={editItem}
      />
    </>
  );
};

export default MainControl;
