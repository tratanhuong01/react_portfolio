import React from "react";
import Title from "../components/Title/Title";

function Contact(props) {
  return (
    <div id="contact" className="w-full bg-gray-100">
      <div className="w-full box-content px-2 lg:w-2/3 mx-auto pt-16">
        <Title title="Contact me" />
      </div>

      <div className="w-full px-3 ml-1.5 mt-16 md:mx-auto lg:w-2/3 xl:w-5/12 py-10 lg:p-10 bg-white box-border">
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
