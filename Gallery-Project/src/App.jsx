import axios from "axios";
import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=15");
    setUserData(res.data);
    console.log(userData);
  };
  let printUserData = "No User Available";

  if(userData.length>0){
    printUserData = userData.map((item,idx)=>{
      return <div key={idx}>
        <img className="h-[20vw] w-[20vw] rounded-4xl" src={item.download_url} alt="" />
      </div>
    })
  }
  return (
    <div className="bg-black min-h-screen p-4 text-teal-400">
      <button
        onClick={getData}
        className="bg-amber-700 border-2 p-3 m-12 active:scale-95 border-cyan-700 text-black text-7xl"
      >
        Get Data
      </button>
      <div className="flex flex-wrap gap-5 p-30">{printUserData}</div>
    </div>
  );
};

export default App;
