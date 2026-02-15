import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState('');
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(age);
    console.log(password);

    
  };
  console.log("render");
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">

          <input
            placeholder="Enter your Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-fields">
          <input
            placeholder="Enter your Age"
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="form-fields">
          <input
            placeholder="Enter your Password"
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
