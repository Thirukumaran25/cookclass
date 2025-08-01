import React from "react";
import image3 from "../images/unsplash.png";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container mx-auto p-4 sm:p-8 md:p-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        ACADEMY SUPPORT
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-12 items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Submit a Ticket
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="requester"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                REQUESTER *
              </label>
              <input
                id="requester"
                type="email"
                className="w-full p-2 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                SUBJECT *
              </label>
              <input
                id="subject"
                type="text"
                className="w-full p-2 border border-gray-300 shadow rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                DESCRIPTION *
              </label>
              <textarea
                id="description"
                className="w-full p-2 border border-gray-300 shadow rounded-xl h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="robot-check"
                className="rounded text-blue-500 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-600">I'm not a robot</p>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className=" py-2 px-4 bg-amber-700 mx-2 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
              <button
                type="button"
                className=" py-2 px-4 bg-white mx-2 border text-gray-800 font-semibold rounded-full hover:bg-gray-300 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={image3}
            alt="Academy Support"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className=" text-center lg:mt-16">
        <h1 className="text-3xl font-bold">
          Homemakers to busy executives, budding chefs to food entrepeneurs,
          grandparents to moms, health concious people or foodies- there is a
          course for all.
        </h1>
        <Link to="/course"><button className="my-10 py-2 px-8 font-semibold text-white text-xl bg-red-800 rounded-full">
          VIEW COURSES
        </button></Link>
      </div>
    </div>
  );
}

export default Contact;
