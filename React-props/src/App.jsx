import React from "react";
import Card from "./Components/Card";

const App = () => {
  return <div className="parent">
    <Card
    name="Yuvraj Singh"
    info="He is really nice guy"
    imgSrc = "https://plus.unsplash.com/premium_vector-1682304065151-5c902aae7c2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D"
    />
    <Card
    name="Raj Mangal"
    info="He is a very chill guy"
    imgSrc="https://plus.unsplash.com/premium_vector-1746806658734-9644193caa1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D"
    />
    
  </div>;
};

export default App;
