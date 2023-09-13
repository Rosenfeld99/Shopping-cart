import { Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../context/CartContext";

interface CartCanvasProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const Navbar = ({ open, setOpen }: CartCanvasProps) => {
  const MENU_ITEMS = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Store",
      path: "/store",
    },
  ];
  const { state } = useCart();
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  const openModalCart = () => {
    if (!open) {
      setOpen(true);
    }
  };
  return (
    <div className=" bg-white shadow-md fixed top-0 left-0 w-full z-40">
      <div className="flex items-center justify-between p-3 max-w-5xl mx-auto">
        <div className=" flex items-center gap-10">
          {MENU_ITEMS?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={item?.path === currentPath ? "text-blue-500 font-semibold" : ""}
            >
              {item?.name}
            </Link>
          ))}
        </div>
        <div
          onClick={openModalCart}
          className=" bg-blue-500 p-3 text-xl rounded-full text-white relative hover:bg-white hover:text-blue-500 hover:ring-1"
        >
          <AiOutlineShoppingCart />
          {state?.cartItems?.length > 0 ? (
            <div className=" absolute ring-1 ring-white bg-red-500 flex items-center justify-center rounded-full text-sm translate-x-[15px] translate-y-[-3px] w-5 h-5 text-white">
              {state?.cartItems?.length}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
