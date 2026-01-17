import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import Navbar from "../components/Navbar";
import {
  clearCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const handleDeleteCollection = () => {
    dispatch(clearCollection());
    dispatch(removeToast());
  };
  return (
    <>
      <Navbar />
      <div className="overflow-auto px-10 py-6">
        <div className="flex justify-between">
          {collection.length > 0 ? (
            <>
              <h2>Your Collection</h2>
              <button
                className="bg-(--c4) p-2 rounded-xl text-black font-semibold active:scale-95 transition cursor-pointer"
                onClick={handleDeleteCollection}
              >
                Clear Collection
              </button>
            </>
          ) : (
            <h2>Add some videos,GIF's to your collection</h2>
          )}
        </div>
      </div>
      <div className="flex justify-center w-full flex-wrap gap-6 overflow-auto px-10 py-6">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CollectionPage;
