import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1764545333841-8dd805f5b7c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse unde quae minus magnam veritatis.",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1764957081310-c7ea379f667a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse unde quae minus magnam veritatis.",

      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1765201808749-40a5001f1c73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse unde quae minus magnam veritatis.",

      tag: "Underbanked",
    },
  ];
  return (
    <div className="h-screen w-full bg-amber-700">
      <Section1  users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
