import React, { useState } from "react";

function Button({ type, button, name, setType }) {
  return (
    <button
      onClick={() => setType(button)}
      className={` mr-3 flex justify-items-end  px-5 py-2 rounded-full font-semibold border-2 
        border-solid ${
          type === button
            ? "bg-gray-600 text-white hover:bg-gray-300 hover:text-gray-800 hover:border-gray-500"
            : "bg-gray-300 text-gray-800 border-gray-500 hover:bg-gray-600 hover:text-white"
        }`}
    >
      {name}
    </button>
  );
}

function ItemProject(props) {
  //
  const [type, setType] = useState(0);
  //
  return (
    <div className="w-full box-border py-6 bg-white flex my-6 md:my-12 flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <div className="border-l-8 border-solid border-blue-600 pl-4 font-bold mb-2 text-2xl text-blue-600">
          Clone facebook
        </div>
        <div className="p-3">
          <p className="text-gray-600 font-bold mb-3">Description : </p>
          <div></div>
          <p className="text-gray-600 font-bold mb-3">Link demo : </p>
          <div></div>
          <p className="text-gray-600 font-bold mb-3">Link github : </p>
          <div></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-3 box-border">
        <div className="flex my-2">
          <Button name="Video" button={0} type={type} setType={setType} />
          <Button name="Pictures" button={1} type={type} setType={setType} />
        </div>
        {type === 0 ? (
          <div className="w-full h-72 md:h-64 bg-gray-200">
            <video
              src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
              className="w-full h-full object-cover"
            ></video>
          </div>
        ) : (
          <div className="w-full h-64 relative">
            <i
              class="bx bxs-chevron-left-circle text-3xl cursor-pointer absolute top-1/2 transform 
            -translate-y-1/2 -left-2.5"
            ></i>
            <img
              src="https://cdn.dribbble.com/users/2058580/screenshots/9650156/fb_dribbble_4x.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <i
              class="bx bxs-chevron-right-circle text-3xl cursor-pointer absolute top-1/2 transform 
            -translate-y-1/2 -right-2.5"
            ></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemProject;
