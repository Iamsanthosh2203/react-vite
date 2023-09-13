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
        <i className="fa-solid fa-cart-shopping text-4xl"></i>
      </div>

      <div className="w-full flex md:hidden">
        <ul className="flex w-full justify-between md:hidden font-oswald font-thin">
          <li>
            <a href="/react-vite/products">All Products</a>
          </li>
          <li>
            <a href="/react-vite/sofa">Sofa</a>
          </li>
          <li>
            <a href="/react-vite/chair">Chair</a>
          </li>
          <li>
            <a href="/react-vite/table">Table</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
