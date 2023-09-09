import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Nav() {
  return (
    <nav className="block md:flex justify-center md:justify-between items-center mb-10">
      <div className="flex justify-center gap-6 items-center">
        <Link href="/react-vite/">
          <img width={"150px"} src={logo} alt="logo" />
        </Link>
        <ul className="hidden md:flex gap-12 font-oswald font-thin">
          <li>
            <Link to="/react-vite/products">All Products</Link>
          </li>
          <li>
            <Link to="/react-vite/sofa">Sofa</Link>
          </li>
          <li>
            <Link to="/react-vite/chair">Chair</Link>
          </li>
          <li>
            <Link to="/react-vite/table">Table</Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <i className="fa-solid fa-cart-shopping text-4xl"></i>
      </div>

      <div className="w-full flex md:hidden">
        <ul className="flex w-full justify-between md:hidden font-oswald font-thin">
          <li>
            <a href="/products">All Products</a>
          </li>
          <li>
            <a href="/sofa">Sofa</a>
          </li>
          <li>
            <a href="/chair">Chair</a>
          </li>
          <li>
            <a href="/table">Table</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
