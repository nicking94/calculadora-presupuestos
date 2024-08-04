import Item from "./Item";

const DisplayItems = ({ subs, eliminarItem, editItem }) => {
  return (
    <>
      {subs.length > 0 ? (
        <div className="w-full border-[.1rem] border-blue-500 bg-white shadow-lg shadow-blue-500">
          <div className="bg-gradient-to-bl from-blue-800 to-black p-2">
            <h2 className="text-center text-[1rem] font-bold text-white lg:text-[1.5rem]">
              Servicios
            </h2>
          </div>

          {subs.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              price={item.price}
              type={item.type}
              eliminarItem={eliminarItem}
              editItem={editItem}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default DisplayItems;
