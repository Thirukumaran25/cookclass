import React from "react";
import image1 from "../images/Group 6.png";
import image2 from "../images/Group 40.png";
import image3 from "../images/Rectangle 26.png";

function About() {
  return (
    <div>
      <div className="lg:flex py-4 lg:px-28 lg:gap-2">
        <div className="bg-linear-to-t from-white to-green-500 text-center lg:w-3/5 rounded-2xl px-16 py-4">
          <h1 className="text-2xl font-semibold">
            TAKE YOUR COOKING SKILLS TO THE NEXT LEVEL WITH MASTER CHEFS
          </h1>
          <p className="mt-8 font-semibold">
            CULINARY TIPS AND TRICKS STRAIGHT FROM THE EXPERT, ON HOW TO COOK
            SCRUMPTIOUS, INSTAGRAM READY,LIP SMAKING DISHES THAT ARE
            CLEAN,HEALTHY,AND ENERGIZING.
          </p>
          <button className="my-4 py-2 px-8 font-semibold text-white text-xl bg-red-800 rounded-full">
            VIEW COURSES
          </button>
        </div>
        <div className="lg:w-2/5">
          <img src={image1} alt="" />
        </div>
      </div>
      <div className="lg:mx-30 text-center">
        <h1 className="text-3xl font-bold py-8">About Us</h1>
        <p className="text-xl font-semibold">
          Welcome to Flavour theory, your go-to place for delicious recipes,
          culinary inspiration, and a community of food lovers!
        </p>
        <p className="text-xl font-semibold">
          At Flavour theory, we believe that cooking is more than just preparing
          food-it's about creativity, joy and bringing people together. Whether
          you're a seasoned chef or just starting your cuilnary journey, our
          mission is to make cooking easy, fun and accessible to everyone
        </p>
      </div>

<h1 className="text-3xl font-bold text-center py-8">OUR STORY</h1>
      <div className="relative lg:mx-24 h-auto text-center border border-gray-200 rounded-lg shadow-lg mb-8">
        <img src={image3} alt="" className=" rounded-lg" />
        <div className="absolute inset-0 p-4 flex flex-col py-20">
          <p className="text-white">
            In just 4 weeks, say goodbye to bloating, constipation, inflammation
            & acidity. Plus, gain more energy & boost immunity!
          </p>
        </div>
      </div>

      <div className="lg:mx-30">
        <h1 className="text-3xl font-bold text-center py-8">What We Offers</h1>
        <p className="text-2xl"><span className="text-red-700 font-semibold">1. Tasty Recipes:</span> From quick weeknight dinners to indulgent desserts, Our recipes cover every occasion and dietary preference.</p>
        <p className="text-2xl"> <span className="text-red-700 font-semibold">2. Helpfull cooking Tips:</span> Our step-by-step guides, cooking hacks, and ingredients</p>
        <p className="text-2xl"><span className="text-red-700 font-semibold">3. Community of Food Lovers:</span> Join Our vibrant community of home cooks, share your own recipes,leave reviews, and inspire others. We believe cooking is even more enjoyable when shared!</p>
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
  );
}

export default About;
