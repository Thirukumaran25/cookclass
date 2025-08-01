import React from "react";
import image1 from "../images/Group 50.png";
import { Link } from "react-router-dom";

function Bakery() {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center mb-4">
        BAKERY BUSINESS ACCELERATOR PROGRAM
      </h1>
      <p className="font-bold text-3xl text-center mb-4">
        Program Limited to 50 people Only!
      </p>
      <div className="lg:mx-28">
        <img className="w-full" src={image1} alt="" />
      </div>
      <div className="relative lg:mx-28 px-4 sm:px-10 py-16 bg-[#A7C957] rounded-2xl my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 text-xl text-white font-bold">
          <div>
            <p className="text-3xl text-center">📝</p>
            <p>
              1 YEAR ACCESS TO EXCLUSIVE RECIPE VIDEOS, NOT AVAILABLE ON YOUTUBE
            </p>
          </div>
          <div>
            <p className="text-3xl text-center">📝</p>
            <p>
              1 YEAR ACCESS TO EXCLUSIVE RECIPE VIDEOS, NOT AVAILABLE ON YOUTUBE
            </p>
          </div>
          <div>
            <p className="text-3xl text-center">📝</p>
            <p>
              1 YEAR ACCESS TO EXCLUSIVE RECIPE VIDEOS, NOT AVAILABLE ON YOUTUBE
            </p>
          </div>
          <div>
            <p className="text-3xl text-center">📝</p>
            <p>
              1 YEAR ACCESS TO EXCLUSIVE RECIPE VIDEOS, NOT AVAILABLE ON YOUTUBE
            </p>
          </div>
          <div>
            <p className="text-3xl text-center">📝</p>
            <p>
              1 YEAR ACCESS TO EXCLUSIVE RECIPE VIDEOS, NOT AVAILABLE ON YOUTUBE
            </p>
          </div>
          <div>
            <p className="text-3xl text-center">📝</p>
            <p>
              1 YEAR ACCESS TO EXCLUSIVE RECIPE VIDEOS, NOT AVAILABLE ON YOUTUBE
            </p>
          </div>
        </div>
      </div>
      <div className=" text-center lg:px-36 px-4">
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

export default Bakery;
