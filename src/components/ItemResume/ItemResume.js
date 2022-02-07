import React from "react";

function ItemResume(props) {
  //
  const { title } = props;
  //
  return <>
    <div className="border-l-8 mt-10 border-solid border-blue-600 pl-4 font-bold pb-2 text-2xl text-blue-600">
      {title}
    </div>
    <div className="text-gray-600 my-8">
      {props.children}
    </div>
  </>;
}

export default ItemResume;
