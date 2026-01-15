import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="w-[18vw] h-80 relative bg-amber-400 rounded">
      <a target="_blank" href={item.url} className="h-full">
        {item.type === "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type === "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            src={item.src}
          ></video>
        ) : (
          ""
        )}
        {item.type === "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
      </a>

      <div
        id="bottom"
        className=" flex justify-between items-center w-full px-6 py-3 text-white absolute bottom-0 "
      >
        <h2 className="text-lg font-semibold capitalize overflow-hidden ">{item.title}</h2>
        <button className="bg-indigo-600 active:scale-95 text-orange-200 px-3 py-1 font-medium rounded-2xl">Save</button>
      </div>
    </div>
  );
};

export default ResultCard;
