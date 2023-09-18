function Contact() {
  return (
    <section className="flex gap-11 justify-around">
      <div className="flex flex-col w-full md:w-auto">
        <h1 className="text-lg md:text-3xl font-montserrat border-b-2 border-black border-spacing-4 text-center md:text-left">
          GET IN TOUCH , WE&apos;RE USER-FRIENDLY!
        </h1>

        <form
          className="mt-6 text-lg md:text-2xl flex flex-col"
          action="https://formspree.io/f/moqolkeo"
          method="POST"
        >
          <div className="my-3 flex justify-between">
            <label htmlFor="name">
              Your Name
              <span className="text-lg text-red-500 font-bold ml-1">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="ml-4 p-2 rounded-md"
            />
          </div>
          <div className="my-3 flex justify-between">
            <label htmlFor="email">
              Your Email
              <span className="text-lg text-red-500 font-bold ml-1">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="ml-4 p-2 rounded-md"
            />
          </div>
          <div className="my-3 flex justify-between">
            <label htmlFor="number">
              Phone Number
              <span className="text-lg text-red-500 font-bold ml-1">*</span>
            </label>
            <input
              type="number"
              name="number"
              id="number"
              required
              className="ml-4 p-2 rounded-md"
            />
          </div>

          <div className="my-3 flex justify-between">
            <label htmlFor="file_upload">Required Files</label>
            <input
              type="file"
              name="file_upload"
              id="file_upload"
              accept=".jpg, .jpeg, .png, .doc, .docx, .pdf"
            />
          </div>
          <div className="my-3 flex justify-between">
            <label htmlFor="message">
              {" "}
              Message{" "}
              <span className="text-lg text-red-500 font-bold ml-1">*</span>
            </label>
            <textarea
              required
              name="message"
              id="message"
              cols="35"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#545454] text-white p-2 mt-2 mb-2 w-1/2 md:w-auto self-center"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="bg-[#545454] text-[#f8f8ee] p-5 h-[50%] hidden md:block">
        <div className="flex items-center gap-4">
          <i className="fa-solid fa-info"></i>
          <h2 className="font-bold text-xl">Address</h2>
        </div>
        <div>
          <address>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing
          </address>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <i className="fa-solid fa-phone"></i>
          <h2 className="font-bold text-xl">Phone</h2>
          <p>987654321</p>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <i className="fa-solid fa-envelopes-bulk"></i>
          <h2 className="font-bold text-xl">Mail</h2>
          <p>sample@email.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
