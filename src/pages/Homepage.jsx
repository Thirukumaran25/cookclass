import React, { useState } from "react";
import image1 from "../images/Group 6.png";
import image2 from "../images/Group 40.png";
import image3 from "../images/unsplash.png";
import image4 from "../images/COURSES.png";
import { Link } from "react-router-dom";

function Homepage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "1. How do I find a recipe on your website?",
      answer:
        "You can easily find a recipe by using the search bar at the top of the page. Simply type in the dish you're looking for, and we'll provide a list of relevant recipes. Alternatively, you can browse recipes by category.",
    },
    {
      question: "2. Can I save my favorite recipes?",
      answer:
        "Yes! You can create an account and save your favorite recipes to access them anytime in your profile.",
    },
    {
      question: "3. How do i submit my own recipes?",
      answer:
        "Yes! You can create an account and save your favorite recipes to access them anytime in your profile.",
    },
    {
      question: "4. Are the recipes suitable for beginners?",
      answer:
        "Yes! You can create an account and save your favorite recipes to access them anytime in your profile.",
    },
    {
      question: "5. How do i know if a recipe is vegan, gluten-free, or dairy-free?",
      answer:
        "Yes! You can create an account and save your favorite recipes to access them anytime in your profile.",
    },
    {
      question: "6. Can i print recipes from the website?",
      answer:
        "Yes! You can create an account and save your favorite recipes to access them anytime in your profile.",
    },
    {
      question: "7. Do you offer video tutorials?",
      answer:
        "Yes! You can create an account and save your favorite recipes to access them anytime in your profile.",
    },
    {
      question: "8. Can I share recipes with my friends and family?",
      answer:
        "Yes! You can create an account and save your favorite recipes to access them anytime in your profile.",
    },
    {
      question: "9. How can i contact you if i have questions or suggestions?",
      answer:
        "Yes! You can create an account and save your favorite recipes to access them anytime in your profile.",
    },
    {
      question: "10. is there a mobile app for this website?",
      answer:
        "Yes! You can create an account and save your favorite recipes to access them anytime in your profile.",
    },
  ];

  return (
    <div>
      <div className="lg:flex py-4 lg:px-28 lg:gap-2">
        <div className="lg:w-2/5">
          <img src={image1} alt="" />
        </div>
        <div className="text-center bg-gradient-to-r from-green-500 from-1% via-white via-90%  to-green-500 to-10% lg:w-3/5 rounded-2xl px-16 py-4">
          <h1 className="text-2xl font-semibold">
            TAKE YOUR COOKING SKILLS TO THE NEXT LEVEL WITH MASTER CHEFS
          </h1>
          <p className="mt-8 font-semibold">
            CULINARY TIPS AND TRICKS STRAIGHT FROM THE EXPERT, ON HOW TO COOK
            SCRUMPTIOUS, INSTAGRAM READY,LIP SMAKING DISHES THAT ARE
            CLEAN,HEALTHY,AND ENERGIZING.
          </p>
          <Link to="/course"><button className="my-4 py-2 px-8 font-semibold text-white text-xl bg-red-800 rounded-full">
            VIEW COURSES
          </button></Link>
        </div>
      </div>

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

      <div className="lg:px-24 px-4">
        <img src={image2} alt="" />
      </div>
      <div className="py-10">
        <h1 className="text-center text-3xl font-bold">FAQ's</h1>
        <div className="py-10 lg:px-24 px-4">
          {questions.map((item, index) => (
            <div key={index} className="relative border p-4 rounded-2xl font-semibold text-2xl mb-4">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {openIndex === index && (
                <div className="left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg p-4 z-10">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
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

export default Homepage;
