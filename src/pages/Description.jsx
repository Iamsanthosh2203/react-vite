import { Link, useParams } from "react-router-dom";
import { data } from "../data/data";

import Footer from "../constant/Footer";

function Description() {
  // Get the currentProduct value from URL parameters

  const { productId } = useParams();

  const dataRender = data[productId - 1];

  return (
    <div>
      {productId ? (
        <>
          <div className="flex px-10 flex-col md:flex-row justify-around">
            <div className="h-[60vh] basis-[50%]">
              <img
                className="h-full"
                src={dataRender.image}
                alt={dataRender.title}
              />
            </div>

            <div className="flex flex-col items-center md:items-start basis-[50%] h-full ">
              <h1 className="font-oswald text-4xl my-6 text-center">
                {dataRender.title}
              </h1>
              <h2 className="font-serif text-lg">{dataRender.category}</h2>
              <p className="text-xl my-6">{dataRender.content}</p>
              <p className="text-xl italic font-serif mb-4">
                ${dataRender.price}
              </p>

              <Link
                to={`/react-vite/purchase/`}
                className="my-4 px-4 py-2 bg-black text-white hover:text-black hover:bg-red-400 duration-200 w-1/2"
              >
                Purchase Product
              </Link>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {productId ? <Footer /> : <></>}
    </div>
  );
}
export default Description;
