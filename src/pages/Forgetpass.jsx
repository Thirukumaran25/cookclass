import React from "react";

function Forgetpass() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full bg-orange-100 max-w-2xl py-8 px-28 rounded-lg shadow-md">
        <h1 className="font-bold text-3xl text-center mb-6 text-gray-800">
          <span className="bg-green-600 rounded-full px-2">FORGET PASSWORD</span> 
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-Mail
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-red-300 rounded-xl shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              className="py-2 px-20 bg-red-800 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          <p className="mt-2 text-gray-500">
            By Joining And Using Flover Theory Academy <br />
            platform, You Agree To Our. Terms & Policies
          </p>
        </div>
      </div>
    </div>
  );
}

export default Forgetpass;
