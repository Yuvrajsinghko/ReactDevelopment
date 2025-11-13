import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.imgSrc}
        alt=""
      />
      <h1>{props.name}</h1>
      <p>{props.info}</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
