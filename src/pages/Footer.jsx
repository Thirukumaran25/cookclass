import React from 'react'
import image1 from "../images/Group 42.png";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-[#D57A66] text-white py-10 px-4 md:px-8">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
       
        <div className="flex justify-center lg:justify-start items-start mb-6 md:mb-0">
          <img src={image1} alt="Company Logo" className=" w-auto object-contain" /> {/* Adjust h-20 as needed */}
        </div>
       
        <div className="text-center lg:px-2 md:text-left mb-6 md:mb-0">
          <h1 className="text-xl font-semibold mb-4">HOME</h1>
          <ul className="space-y-2">
            <Link to="/about"><li><p className="  hover:text-black cursor-pointer">ABOUT US</p></li></Link>
            <li><p className="  hover:text-black cursor-pointer">PROGRAMS</p></li>
            <Link to="/course"><li><p className="  hover:text-black cursor-pointer">COURSES</p></li></Link>
          </ul>
        </div>

        
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-xl font-semibold mb-4 ">COURSES</h1>
          <ul className="space-y-2">
            <li><p className="  hover:text-black cursor-pointer">THE GOOD GUT PROGRAM</p></li>
            <li><p className="  hover:text-black cursor-pointer">FOOD LOOK GOOD</p></li>
            <li><p className="  hover:text-black cursor-pointer">START YOUR BUSINESS FROM HOME-NON VEG & VEG</p></li>
            <li><p className="  hover:text-black cursor-pointer">START YOUR FOOD BUSINESS FROM HOME-VEG ONLY</p></li>
            <li><p className="  hover:text-black cursor-pointer">IMMUNITY BOOSTER RECIPES</p></li>
            <li><p className="  hover:text-black cursor-pointer">INDIA'S FAVOURITES: RESTAURANTS AND HOME STYLE DISHES</p></li>
            <li><p className="  hover:text-black cursor-pointer">VEGETARIAN'S DELIGHT</p></li>
            <li><p className="  hover:text-black cursor-pointer">GARNISHING & PLATING</p></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold mb-4 ">CONTACT</h1>
          <div className="space-y-2 mb-6">
            <p className=" hover:text-black">
              <i className="fa-solid fa-location-dot mr-2"></i>
              FLOVERTHEROY ACADEMY <br />
              1234, OLIVE STREET, <br />
              CHENNAI-21
            </p>
            <p className=" hover:text-black">
              ✉️ INFO@FLOVERTHEORYACADEMY.IN
            </p>
            <p className=" hover:text-black">
              📞 044-9874563211
            </p>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-4 ">FOLLOW US</h1>
            <div className="flex justify-center md:justify-start space-x-4 text-2xl">
              <i className="fa-brands fa-square-instagram  hover:text-pink-500 cursor-pointer"></i>
              <i className="fa-brands fa-facebook  hover:text-blue-600 cursor-pointer"></i>
              <i className="fa-brands fa-youtube  hover:text-red-600 cursor-pointer"></i>
              <i className="fa-brands fa-google  hover:text-green-500 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer