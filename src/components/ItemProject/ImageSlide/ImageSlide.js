import React, { useContext, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";

export default function ImageSlide(props) {
  //
  const { dispatch, actions } = useContext(AppContext);
  const { images } = props;
  const [index, setIndex] = useState(0);
  //
  return (
    <div className="w-full h-64 relative">
      {
        <i
          onClick={() =>
            setIndex(index - 1 < 0 ? images.length - 1 : index - 1)
          }
          className="bx bxs-chevron-left-circle text-3xl cursor-pointer absolute top-1/2 transform
        -translate-y-1/2 -left-7 cursor-pointer"
        ></i>
      }
      <img
        onClick={() => {
          dispatch(actions.updateData("index", index));
          dispatch(actions.updateData("list", images));
          dispatch(actions.updateData("type", 0));
          dispatch(actions.updateData("preview", true));
        }}
        src={images[index]?.src}
        alt=""
        className="w-full h-full cursor-pointer object-cover"
      />
      {images.length !== 0 && images.length > 1 && (
        <i
          onClick={() => setIndex(index + 1 === images.length ? 0 : index + 1)}
          className="bx bxs-chevron-right-circle text-3xl cursor-pointer absolute top-1/2 transform 
                -translate-y-1/2 -right-7 cursor-pointer"
        ></i>
      )}
    </div>
  );
}
