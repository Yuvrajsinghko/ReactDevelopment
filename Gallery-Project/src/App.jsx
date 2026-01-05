import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  // const getData = async () => {
  //   const res = await axios.get(
  //     `https://picsum.photos/v2/list?page=${index}&limit=15`
  //   );
  //   setUserData(res.data);
  // };

  useEffect(function () {
    const getData = async () => {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      );
      setUserData(res.data);
    };
    getData()
  }, [index]);
  let printUserData = "No User Available";

  if (userData.length > 0) {
    printUserData = userData.map((item, idx) => {
      return (
        <div key={idx}>
          <div>
            <img
              className="h-[15vw] w-[15vw] rounded-4xl object-cover"
              src={item.download_url}
              alt=""
            />
            <h3 className="text-2xl font-extrabold mt-5 text-teal-500 bg-amber-800 rounded-4xl text-center p-2">
              {item.author}
            </h3>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="bg-black min-h-screen p-4 ">
      <h1 className="fixed text-7xl text-amber-500">{index}</h1>
      <div className="flex flex-wrap gap-5 p-30 text-teal-400">
        {printUserData}
      </div>

      <div className="flex justify-center text-5xl gap-20 items-center">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
          className="border-2 rounded-3xl p-2 text-amber-200 bg-neutral-700 cursor-pointer active:scale-95"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
          className="border-2 rounded-3xl p-2 text-amber-200 bg-neutral-700 cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
