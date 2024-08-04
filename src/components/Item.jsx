import { moneyFormat } from "../helpers";
import gasImg from "../assets/img/gas.png";
import luzImg from "../assets/img/luz.png";
import comidaImg from "../assets/img/comida.png";
import disneyPlusImg from "../assets/img/disneyPlus.png";
import gimnasioImg from "../assets/img/Gimnasio.png";
import hboImg from "../assets/img/hboMax.png";
import internetImg from "../assets/img/internet.png";
import netflixImg from "../assets/img/netflix.png";
import otrosImg from "../assets/img/otros.png";
import primeImg from "../assets/img/primeVideo.png";
import saludImg from "../assets/img/salud.png";
import starPlusImg from "../assets/img/starPlus.png";
import telefoniaImg from "../assets/img/telefonía.png";
import transporteImg from "../assets/img/transporte.png";
const Item = ({ price, type, id, eliminarItem, editItem }) => {
  const imageMap = {
    Gas: gasImg,
    Luz: luzImg,
    Comida: comidaImg,
    DisneyPlus: disneyPlusImg,
    Gimnasio: gimnasioImg,
    HboMax: hboImg,
    Internet: internetImg,
    Netflix: netflixImg,
    Otros: otrosImg,
    PrimeVideo: primeImg,
    Salud: saludImg,
    StarPlus: starPlusImg,
    Telefonía: telefoniaImg,
    Transporte: transporteImg,
  };
  //funciones
  const handleDelete = (e) => {
    e.preventDefault();
    const answer = window.confirm(`Borrar el servicio ${type}?`);
    if (answer) {
      eliminarItem(id);
    }
  };
  const handleEdit = (e) => {
    e.preventDefault();
    editItem(id);
  };

  const urlImage = imageMap[type] || "";
  return (
    <div className="flex items-center justify-between border-b-2 bg-white p-2 lg:px-20 lg:py-2">
      <div>
        <img
          src={urlImage}
          alt="Servicios"
          className="h-[4rem] w-[5rem] lg:h-[7rem] lg:w-[10rem]"
        />
        <p className="bg-blue-600 text-center text-[.6rem] font-bold text-white lg:text-[1rem]">
          {type}
        </p>
      </div>
      <h3 className="text-center text-[.8rem] font-bold text-gray-800 lg:text-[1.5rem]">
        Coste: {moneyFormat(Number(price))}
      </h3>
      <div className="space-x-2 lg:space-x-8">
        <button
          onClick={handleEdit}
          className="rounded bg-green-600 p-1 text-[.8rem] font-semibold italic text-white transition-all duration-300 hover:bg-green-500 lg:px-4 lg:py-2 lg:text-[1rem]"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="rounded bg-red-600 p-1 text-[.8rem] font-semibold italic text-white transition-all duration-300 hover:bg-red-500 lg:px-4 lg:py-2 lg:text-[1rem]"
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default Item;
