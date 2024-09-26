import Testimonial from "@/components/HomePage/testimonial/Testimonial";
import Fotter from "@/components/sheared/Footer/Fotter";
import React from "react";

const ContactPage = () => {
  return (
    <div className="mt-6 p-8 ">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Get Resuls. Contact Us Today:
        </h1>
        <div className="flex items-center">
          <span className="inline-block w-[4px] h-16 bg-sky-500 mr-4"></span>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <br className="hidden md:block"></br> Magnam asperiores quae
            corporis delectus vitae repe.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-12">
        <div className="w-full md:w-1/2">
          <form noValidate="" className="space-y-6 bg-gradient-to-b from-sky-300 to-cyan-50  p-8 text-gray-600">
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded bg-[#fff]"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded bg-[#fff]"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded bg-[#fff]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-[#fff] rounded-lg px-6 py-2 hover:bg-sky-200 hover:text-gray-800 hover:scale-y-110  transition-all w-full"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-12 py-3 bg-gray-50 space-y-6">
             <div>
             <h3 className="text-2xl font-semibold text-gray-800">General Inquires</h3>
             <p className="text-gray-600 text-xl">have a question... or just want to say hello? Get in touch:</p>
             </div>
             <div className="text-sky-600">
                  <h3 className="uppercase mb-2">afnansayed1973@gmail.com</h3>
                  <h3>+1-123-456-7890</h3>
             </div>
             <div>
                <h3 className="text-2xl font-semibold text-gray-800">Our location</h3>
                <p className="text-gray-600">Nikunja-2</p>
                <p className="text-gray-600">Dhaka</p>
                <p className="uppercase text-sky-600">get diterction </p>
             </div>
             <div>
                <h3 className="text-2xl font-semibold text-gray-800"> Mediaboom Newsletter</h3>
                <p className="text-gray-600">Exclusive digital marketing & advertising insights</p>
             </div>
        </div>
      </div>

      <div>
          <Testimonial/>
      </div>
        <div>
            <Fotter/>
        </div>
    </div>
  );
};

export default ContactPage;
