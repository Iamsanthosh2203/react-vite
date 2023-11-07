import Footer from "../constant/Footer";

function Purchase() {
  return (
    <>
      <form
        className="font-montserrat"
        action="https://formspree.io/f/moqolkeo"
        method="POST"
      >
        <h1 className="text-4xl font-bold mb-4">Enquiry Form</h1>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col mb-4">
            <label htmlFor="fname">First Name</label>
            <input
              className="px-2 py-2 border-2 rounded-md"
              type="text"
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="sname">Second Name</label>
            <input
              className="px-2 py-2 border-2 rounded-md"
              type="text"
              id="sname"
              name="sname"
              required
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
              name="compname"
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="address">Street Address</label>

          <textarea
            name="address"
            id="address"
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
              name="country"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="state">State</label>
            <input
              className="px-2 py-2 border-2 rounded-md"
              type="text"
              id="state"
              name="state"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              className="px-2 py-2 border-2 rounded-md"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="compname">Phone Number</label>
            <input
              className="px-2 py-2 border-2 rounded-md"
              type="number"
              id="phone"
              name="phone"
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-4 items-start md:items-center">
          <div className="flex flex-col mb-4 w-full md:w-auto">
            <label htmlFor="enquiry">Enquiry</label>
            <select
              name="enquiry"
              id="enquiry"
              className="p-2 rounded-md mt-2 border-2"
            >
              <option value="all">All Products</option>
              <option value="home">Home Decors</option>
              <option value="living">Living Room</option>
              <option value="bed">Bed Room</option>
              <option value="dining">Dining and Kitchen</option>
            </select>
          </div>

          <div className="flex flex-col mb-4 w-full md:w-auto">
            <label htmlFor="product">Product Name</label>
            <input
              className="p-2 rounded-md mt-2 border-2"
              type="text"
              id="product"
              name="product"
              required
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
            name="orderNotes"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white hover:text-black mt-4 hover:bg-red-400 duration-150 w-[30%]"
          >
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Purchase;
