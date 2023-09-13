import { Link } from "react-router-dom";
import Footer from "../constant/Footer";
import { data } from "../data/data";

function Tabel() {
  return (
    <>
      <TabelProducts />
      <Footer />
    </>
  );
}

function TabelProducts() {
  const chairProducts = data.filter((product) => product.category === "Table");

  return (
    <section className="flex flex-col items-center justify-between mb-10">
      <h1 className="text-center text-4xl mb-4">Bed Room Accessories</h1>
      <h2 className="text-center text-2xl">Our Latest Products</h2>
      <div className="w-[20%] h-[1px] bg-black"></div>

      <div className="my-12 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {chairProducts.map((product) => (
            <Link
              to={`/react-vite/description/${product.id}`}
              className="mx-8 h-80 w-64 md:w-80 hover:cursor-pointer my-8"
              key={product.id}
            >
              {/* Image */}
              <div
                className="w-full h-64 bg-red-600 hover:scale-105 duration-300"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Text */}
              <div className="px-3 mt-5">
                <p className="font-oswald font-thin">{product.category}</p>
                <p className="font-thin">{product.title}</p>
                <p className="font-bold">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Tabel;
