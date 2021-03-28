import React from "react";
import Image from "next/image"

export default function Card(props) {
  const fullCard = (e) => {
    const name = e.target.textContent;
    props.click(name);
  };


  return (
    <div className="card" onClick={(e) => fullCard(e)}>
      <div className="animalPicture" >
        <Image src={props.pic} height="64" width="64" layout="fixed" quality={1}/>
      </div>
      <div className="animalName">{props.name}</div>
    </div>
  );
}
