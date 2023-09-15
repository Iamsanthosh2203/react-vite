import Footer from "../constant/Footer";

function Purchase() {
  return (
    <>
      <form className="font-montserrat">
        <h1 className="text-4xl font-bold mb-4">Enquiry Form</h1>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col mb-4">
            <label htmlFor="fname">First Name</label>
            <input
              className="px-2 py-2 border-2 rounded-md"
              type="text"
              id="fname"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="sname">Second Name</label>
            <input
              className="px-2 py-2 border-2 rounded-md"
              type="text"
              id="sname"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="compname">
              Company Name <span className="text-sm">(Optional)</span>
            </label>
            <input
              className="px-2 py-2 border-2 rounded-md"
              type="text"
              id="compname"
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="address">Street Address</label>

          <textarea
            name=""
            id=""
            cols="10"
            rows="4"
            className="border-2 rounded-md"
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="flex flex-col mb-4">
            <label htmlFor="country">Country / Region</label>
            <input
              className="px-2 py-2 border-2 rounded-md"
              type="text"
              id="country"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="state">State</label>
            <input
              className="px-2 py-2 border-2 rounded-md"
              type="text"
              id="state"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              className="px-2 py-2 border-2 rounded-md"
              type="email"
              id="email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="compname">Phone Number</label>
            <input
              className="px-2 py-2 border-2 rounded-md"
              type="number"
              id="phone"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-4 items-start md:items-center">
          <div className="flex flex-col mb-4 w-full md:w-auto">
            <label htmlFor="enquiry">Enquiry</label>
            <select
              name=""
              id="enquiry"
              className="p-2 rounded-md mt-2 border-2"
            >
              <option value="">All Products</option>
              <option value="">Home Decors</option>
              <option value="">Living Room</option>
              <option value="">Bed Room</option>
              <option value="">Dining and Kitchen</option>
            </select>
          </div>

          <div className="flex flex-col mb-4 w-full md:w-auto">
            <label htmlFor="product">Product Name</label>
            <input
              className="p-2 rounded-md mt-2 border-2"
              type="text"
              id="product"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="font-bold text-2xl mb-2">Additional Info</h2>

          <label htmlFor="orderNotes">
            Order Notes <span className="text-sm">(Optional)</span>
          </label>

          <textarea
            className="border-2 rounded-md"
            id="orderNotes"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button className="px-4 py-2 bg-black text-white hover:text-black mt-4 hover:bg-red-400 duration-150 w-[30%]">
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Purchase;
