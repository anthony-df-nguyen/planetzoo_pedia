import React from 'react'

export default function Card(props) {
    const fullCard = (e) => {
      const name = e.target.innerText;
      props.click(name);
    }
    return (
      <div className="card" onClick={(e) => fullCard(e)}>
        <div
          className="animalPicture"
          style={{ backgroundImage: `url(${props.pic})` }}></div>
        <div className="animalName">{props.name}</div>
      </div>
    );
}
