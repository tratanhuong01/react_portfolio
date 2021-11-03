import React from "react";

function Contact(props) {
  return (
    <div className="w-full bg-gray-100 pb-16">
      <div className="flex items-center py-16 justify-center">
        <div className="bg-blue-600 w-4 h-4 mr-3"></div>
        <span className="text-4xl font-bold">Contact me</span>
      </div>
      <div className="w-5/12 p-10 bg-white mx-auto">
        <div className="w-full flex">
          <div className="w-1/2 mr-10">
            <label className="font-semibold">
              First Name{" "}
              <span className="text-blue-600 ml-1 text-xm font-bold">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border-b-3 border-gray-400 focus:border-blue-600 caret-blue-600"
            />
          </div>
          <div className="w-1/2">
            <label className="font-semibold">
              Last Name{" "}
              <span className="text-blue-600 ml-1 text-xm font-bold">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border-b-3 border-gray-400 focus:border-blue-600 caret-blue-600"
            />
          </div>
        </div>
        <div className="w-full mt-6">
          <label className="font-semibold">
            Email{" "}
            <span className="text-blue-600 ml-1 text-xm font-bold">*</span>
          </label>
          <input
            type="text"
            className="w-full p-2 border-b-3 border-gray-400 focus:border-blue-600 caret-blue-600"
          />
        </div>
        <div className="w-full mt-6">
          <label className="font-semibold">
            Subject{" "}
            <span className="text-blue-600 ml-1 text-xm font-bold">*</span>
          </label>
          <input
            type="text"
            className="w-full p-2 border-b-3 border-gray-400 focus:border-blue-600 caret-blue-600"
          />
        </div>
        <div className="w-full mt-6">
          <label className="font-semibold">
            Message{" "}
            <span className="text-blue-600 ml-1 text-xm font-bold">*</span>
          </label>
          <textarea className="resize-none h-32 w-full p-2 border-b-3 border-gray-400 focus:border-blue-600 caret-blue-600" />
        </div>
        <button
          className="mt-6 px-10 py-2.5 border-2 border-solid hover:border-blue-600 rounded-full 
          text-white font-semibold bg-blue-600 hover:bg-white hover:text-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
