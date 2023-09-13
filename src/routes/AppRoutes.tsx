import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";
import Navbar from "../components/Navbar";
import CartCanvas from "../components/CartCanvas";
import {useState} from 'react'
const AppRoutes = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className=" max-w-5xl mx-auto">
      <BrowserRouter>
        <Navbar open={open} setOpen={setOpen}/>
        <div className=" pt-20 p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </div>
        {open && <CartCanvas open={open} setOpen={setOpen}/>}
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
