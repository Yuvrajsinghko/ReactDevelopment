import React from "react";
import Card from './Card'
const RightContent = (props) => {
  return <div className="h-full p-6 w-3/4 flex gap-8">
    {props.users.map((elem,idx)=>{

      return <Card key={idx} id={idx} imgSrc={elem.img} content={elem.content} tag={elem.tag}/>
    })}
    
  </div>;
};

export default RightContent;
