import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Nav() {
  return (
    <nav className="block md:flex justify-center md:justify-between items-center mb-10">
      <div className="flex justify-center gap-6 items-center">
        <Link href="/react-vite/">
          <img width={"200px"} src={logo} alt="logo" />
        </Link>
        <ul className="hidden md:flex gap-12 text-xl font-oswald font-thin">
          <li>
            <Link to="/react-vite/products">All Products</Link>
          </li>
          <li>
            <Link to="/react-vite/sofa">Home Decors</Link>
          </li>
          <li>
            <Link to="/react-vite/chair">Living Room</Link>
          </li>
          <li>
            <Link to="/react-vite/table">Bed Room</Link>
          </li>
          <li>
            <Link to="/react-vite/table">Dining And Kitchen</Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <Link
          to="/react-vite/contact"
          className="text-xl bg-[#474747]  p-2 rounded-md px-3 text-[#f8f8ee]"
        >
          Contact Us
        </Link>
      </div>

      <div className="hidden md:block">
        <i className="fa-solid fa-cart-shopping text-4xl"></i>
      </div>

      <div className="flex w-full justify-center font-oswald font-thin md:hidden mb-3">
        <a href="/react-vite/products">All Products</a>
      </div>
      <div className="w-full flex md:hidden">
        <ul className="flex w-full justify-between md:hidden font-oswald font-thin">
          <li>
            <a href="/react-vite/sofa">Home Decors</a>
          </li>
          <li>
            <a href="/react-vite/chair">Living Room</a>
          </li>
          <li>
            <a href="/react-vite/table">Bed Room</a>
          </li>
          <li>
            <a href="/react-vite/table">Dining/Kitchen</a>
          </li>
        </ul>
      </div>

      <Link to="/react-vite/contact" className="">
        <button className="w-full bg-[#474747] mt-2 px-3 text-[#f8f8ee] font-oswald text-center md:hidden py-1">
          Contact Us
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
