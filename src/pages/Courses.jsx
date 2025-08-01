import React from 'react'
import image3 from "../images/unsplash.png";
import image4 from "../images/COURSES.png";
import image2 from "../images/Group 40.png";


function Courses() {
  return (
    <div>
        <div className="container mx-auto px-4 py-4">
            <h1 className="text-center font-bold text-3xl my-8 md:my-10">
              FEATURED COURSES
            </h1>
            <div className="flex flex-wrap justify-center lg:flex-nowrap lg:gap-8">
              <div className="relative w-full sm:w-80 md:w-96 lg:w-80 text-center border border-gray-200 rounded-lg shadow-lg mb-8">
                <img src={image3} alt="" className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 p-4 flex flex-col py-20">
                  <div>
                    <h1 className="text-xl font-semibold mb-2 text-white">
                      THE GOOD GUT PROGRAM
                    </h1>
                    <p className="text-white">
                      In just 4 weeks, say goodbye to bloating, constipation,
                      inflammation & acidity. Plus, gain more energy & boost
                      immunity!
                    </p>
                  </div>
                  <div className="lg:mt-8">
                    <p className="text-green-300 font-bold mb-2">Get 70% OFF</p>
                    <p className="text-white text-xl mb-6">
                      <span className="line-through mr-2">₹4999</span> ₹1499
                    </p>
                    <button className="py-3 px-10 font-semibold text-white text-lg bg-red-700 hover:bg-red-800 rounded-full transition duration-300 ease-in-out">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full sm:w-80 md:w-96 lg:w-80 text-center border border-gray-200 rounded-lg shadow-lg mb-8">
                <img src={image3} alt="" className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 p-4 flex flex-col py-20">
                  <div>
                    <h1 className="text-xl font-semibold mb-2 text-white">
                      THE GOOD GUT PROGRAM
                    </h1>
                    <p className="text-white">
                      In just 4 weeks, say goodbye to bloating, constipation,
                      inflammation & acidity. Plus, gain more energy & boost
                      immunity!
                    </p>
                  </div>
                  <div className="lg:mt-8">
                    <p className="text-green-300 font-bold mb-2">Get 70% OFF</p>
                    <p className="text-white text-xl mb-6">
                      <span className="line-through mr-2">₹4999</span> ₹1499
                    </p>
                    <button className="py-3 px-10 font-semibold text-white text-lg bg-red-700 hover:bg-red-800 rounded-full transition duration-300 ease-in-out">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full sm:w-80 md:w-96 lg:w-80 text-center border border-gray-200 rounded-lg shadow-lg mb-8">
                <img src={image3} alt="" className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 p-4 flex flex-col py-20">
                  <div>
                    <h1 className="text-xl font-semibold mb-2 text-white">
                      THE GOOD GUT PROGRAM
                    </h1>
                    <p className="text-white">
                      In just 4 weeks, say goodbye to bloating, constipation,
                      inflammation & acidity. Plus, gain more energy & boost
                      immunity!
                    </p>
                  </div>
                  <div className="lg:mt-8">
                    <p className="text-green-300 font-bold mb-2">Get 70% OFF</p>
                    <p className="text-white text-xl mb-6">
                      <span className="line-through mr-2">₹4999</span> ₹1499
                    </p>
                    <button className="py-3 px-10 font-semibold text-white text-lg bg-red-700 hover:bg-red-800 rounded-full transition duration-300 ease-in-out">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-center font-bold text-3xl my-8 md:my-16">
              ALL COURSES
            </h1>
            <div className="grid lg:grid-cols-3 lg:gap-8">
              <div className="relative w-full sm:w-80 md:w-96 lg:w-80 text-center border border-gray-200 rounded-lg shadow-lg mb-8">
                <img src={image4} alt="" className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 p-4 flex flex-col py-20">
                  <div>
                    <h1 className="text-xl font-semibold mb-2 text-white">
                      THE GOOD GUT PROGRAM
                    </h1>
                    <p className=" lg:px-12 px-10">
                      In just 4 weeks, say goodbye to bloating, constipation,
                      inflammation & acidity. Plus, gain more energy & boost
                      immunity!
                    </p>
                  </div>
                  <div className="lg:mt-4">
                    <p className=" font-bold ">Limited Period Offer</p>
                    <p className=" font-bold mb-2">Get 70% OFF</p>
                    <p className=" text-xl mb-6">
                      <span className="line-through mr-2">₹4999</span> ₹1499
                    </p>
                    <button className="py-3 px-10 font-semibold text-white text-lg bg-red-700 hover:bg-red-800 rounded-full transition duration-300 ease-in-out">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full sm:w-80 md:w-96 lg:w-80 text-center border border-gray-200 rounded-lg shadow-lg mb-8">
                <img src={image4} alt="" className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 p-4 flex flex-col py-20">
                  <div>
                    <h1 className="text-xl font-semibold mb-2 text-white">
                      THE GOOD GUT PROGRAM
                    </h1>
                    <p className=" lg:px-12 px-10">
                      In just 4 weeks, say goodbye to bloating, constipation,
                      inflammation & acidity. Plus, gain more energy & boost
                      immunity!
                    </p>
                  </div>
                  <div className="lg:mt-4">
                    <p className=" font-bold ">Limited Period Offer</p>
                    <p className=" font-bold mb-2">Get 70% OFF</p>
                    <p className=" text-xl mb-6">
                      <span className="line-through mr-2">₹4999</span> ₹1499
                    </p>
                    <button className="py-3 px-10 font-semibold text-white text-lg bg-red-700 hover:bg-red-800 rounded-full transition duration-300 ease-in-out">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full sm:w-80 md:w-96 lg:w-80 text-center border border-gray-200 rounded-lg shadow-lg mb-8">
                <img src={image4} alt="" className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 p-4 flex flex-col py-20">
                  <div>
                    <h1 className="text-xl font-semibold mb-2 text-white">
                      THE GOOD GUT PROGRAM
                    </h1>
                    <p className=" lg:px-12 px-10">
                      In just 4 weeks, say goodbye to bloating, constipation,
                      inflammation & acidity. Plus, gain more energy & boost
                      immunity!
                    </p>
                  </div>
                  <div className="lg:mt-4">
                    <p className=" font-bold ">Limited Period Offer</p>
                    <p className=" font-bold mb-2">Get 70% OFF</p>
                    <p className=" text-xl mb-6">
                      <span className="line-through mr-2">₹4999</span> ₹1499
                    </p>
                    <button className="py-3 px-10 font-semibold text-white text-lg bg-red-700 hover:bg-red-800 rounded-full transition duration-300 ease-in-out">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full sm:w-80 md:w-96 lg:w-80 text-center border border-gray-200 rounded-lg shadow-lg mb-8">
                <img src={image4} alt="" className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 p-4 flex flex-col py-20">
                  <div>
                    <h1 className="text-xl font-semibold mb-2 text-white">
                      THE GOOD GUT PROGRAM
                    </h1>
                    <p className=" lg:px-12 px-10">
                      In just 4 weeks, say goodbye to bloating, constipation,
                      inflammation & acidity. Plus, gain more energy & boost
                      immunity!
                    </p>
                  </div>
                  <div className="lg:mt-4">
                    <p className=" font-bold ">Limited Period Offer</p>
                    <p className=" font-bold mb-2">Get 70% OFF</p>
                    <p className=" text-xl mb-6">
                      <span className="line-through mr-2">₹4999</span> ₹1499
                    </p>
                    <button className="py-3 px-10 font-semibold text-white text-lg bg-red-700 hover:bg-red-800 rounded-full transition duration-300 ease-in-out">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full sm:w-80 md:w-96 lg:w-80 text-center border border-gray-200 rounded-lg shadow-lg mb-8">
                <img src={image4} alt="" className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 p-4 flex flex-col py-20">
                  <div>
                    <h1 className="text-xl font-semibold mb-2 text-white">
                      THE GOOD GUT PROGRAM
                    </h1>
                    <p className=" lg:px-12 px-10">
                      In just 4 weeks, say goodbye to bloating, constipation,
                      inflammation & acidity. Plus, gain more energy & boost
                      immunity!
                    </p>
                  </div>
                  <div className="lg:mt-4">
                    <p className=" font-bold ">Limited Period Offer</p>
                    <p className=" font-bold mb-2">Get 70% OFF</p>
                    <p className=" text-xl mb-6">
                      <span className="line-through mr-2">₹4999</span> ₹1499
                    </p>
                    <button className="py-3 px-10 font-semibold text-white text-lg bg-red-700 hover:bg-red-800 rounded-full transition duration-300 ease-in-out">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full sm:w-80 md:w-96 lg:w-80 text-center border border-gray-200 rounded-lg shadow-lg mb-8">
                <img src={image4} alt="" className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 p-4 flex flex-col py-20">
                  <div>
                    <h1 className="text-xl font-semibold mb-2 text-white">
                      THE GOOD GUT PROGRAM
                    </h1>
                    <p className=" lg:px-12 px-10">
                      In just 4 weeks, say goodbye to bloating, constipation,
                      inflammation & acidity. Plus, gain more energy & boost
                      immunity!
                    </p>
                  </div>
                  <div className="lg:mt-4">
                    <p className=" font-bold ">Limited Period Offer</p>
                    <p className=" font-bold mb-2">Get 70% OFF</p>
                    <p className=" text-xl mb-6">
                      <span className="line-through mr-2">₹4999</span> ₹1499
                    </p>
                    <button className="py-3 px-10 font-semibold text-white text-lg bg-red-700 hover:bg-red-800 rounded-full transition duration-300 ease-in-out">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:px-24 px-4 my-10">
                  <img src={image2} alt="" />
                </div>
          
                <div className=" text-center lg:px-36 px-4">
                  <h1 className="text-3xl font-bold">
                    Homemakers to busy executives, budding chefs to food entrepeneurs,
                    grandparents to moms, health concious people or foodies- there is a
                    course for all.
                  </h1>
                  <button className="my-10 py-2 px-8 font-semibold text-white text-xl bg-red-800 rounded-full">
                    VIEW COURSES
                  </button>
                </div>
          </div>
  )
}

export default Courses