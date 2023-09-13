import { useState } from "react";
import { useCart } from "../context/CartContext";
import { CartItem } from "../types/cartTypes";

type StoreItemProps = {
  id: number;
  price: number;
  name: string;
  imgUrl: string;
};

const StoreItem = ({ id, price, name, imgUrl }: StoreItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { state, dispatch } = useCart();
  console.log(state);
  
  // Function to add the item to the cart
  const addToCart = () => {
    const newItem: CartItem = {
      id,
      name,
      price,
      imgUrl,
      quantity: 1, // You can start with a quantity of 1 when adding to the cart
    };
    dispatch({ type: "ADD_TO_CART", payload: newItem });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="bg-slate-100 shadow-md rounded overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-[170px] sm:h-[300px] object-cover bg-slate-300"
      />
      <div className=" p-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          {isHovered ? "" : <h2 className="text-lg font-semibold">{name}</h2>}
          {isHovered ? "" : <p>{price}$</p>}
        </div>
        {isHovered && (
          <div className="card-animation absolute z-20 top-0 left-0 bg-[#ffffffdc] w-full h-full flex justify-center items-center flex-col gap-5">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p>{price}$</p>
            <button onClick={addToCart} className=" font-semibold bg-blue-500 text-white py-1 px-5 rounded">
              Add to cart
            </button>
          </div>
        )}
        {!isHovered && (
          <div className=" w-full">
            <button onClick={addToCart} className=" font-semibold bg-blue-500 text-white w-full p-1 rounded">
              Add to cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
