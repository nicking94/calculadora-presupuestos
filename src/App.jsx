import { useState, useEffect } from "react";
import FormAddMoney from "./components/FormAddMoney";
import Header from "./components/Header";
import MainControl from "./components/MainControl";

function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    const savedIsValid = localStorage.getItem("isValid");

    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
    if (savedIsValid !== null) {
      setIsValid(savedIsValid === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
    localStorage.setItem("isValid", isValid);
  }, [count, isValid]);

  const component = isValid ? (
    <MainControl count={count} setCount={setCount} />
  ) : (
    <FormAddMoney setCount={setCount} setIsValid={setIsValid} />
  );

  return (
    <>
      <div className="flex min-h-[100vh] flex-col space-y-4 bg-gradient-to-tl from-blue-800 to-black p-4 font-roboto lg:items-center lg:px-20 lg:py-10">
        <a
          href="https://portfolio-nk.netlify.app/"
          className="absolute left-0 top-0 p-2 text-[.5rem] text-white md:text-[.8rem]"
        >
          Calculadora creada por
          <span className="ml-1 underline">Nicolás Vallejo</span>
        </a>
        <Header />
        {component}
      </div>
    </>
  );
}

export default App;
