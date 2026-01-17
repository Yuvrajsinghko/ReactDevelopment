import { useState } from "react";
import { RotatingTriangles } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const disptach = useDispatch();

  const removeFromCollection = (item) => {
    disptach(removeCollection(item.id));
    disptach(removeToast())
  };
  return (
    <div className="w-[18vw] h-80 relative rounded">
      <a target="_blank" href={item.url} className="h-full">
        {item.type === "photo" ? (
          <div className="relative w-full h-full">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 z-10">
                <RotatingTriangles
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="rotating-triangles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}

            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              alt=""
              onLoad={() => {
                setIsLoaded(true);
              }}
            />
          </div>
        ) : (
          ""
        )}
        {item.type === "video" ? (
          <div className="relative w-full h-full">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 z-10">
                <RotatingTriangles
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="rotating-triangles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}

            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              src={item.src}
              onLoadedData={() => {
                setIsLoaded(true);
              }}
            ></video>
          </div>
        ) : (
          ""
        )}
        {item.type === "gif" ? (
          <div className="relative w-full h-full">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 z-10">
                <RotatingTriangles
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="rotating-triangles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              onLoad={() => {
                setIsLoaded(true);
              }}
            />
          </div>
        ) : (
          ""
        )}
      </a>

      <div
        id="bottom"
        className=" flex justify-between items-center w-full px-6 py-3 text-white absolute bottom-0 "
      >
        <h2 className="text-lg font-semibold capitalize overflow-hidden ">
          {item.title}
        </h2>
        <button
          onClick={() => {
            removeFromCollection(item);
          }}
          className="bg-indigo-600 active:scale-95 text-orange-200 px-3 py-1 font-medium rounded-2xl"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
