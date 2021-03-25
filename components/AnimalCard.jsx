import React from "react";
import Button from "./Button";
import TopInfo from "./TopInfo"
import NormalAnimal from "./NormalAnimal";
import ExhibitInfo from "./Exhibit";
export default function AnimalCard(props) {
  const animalArray = props.array[0];

  const closeFullCard = props.buttonFnc[0]
  const emptyAnimal = props.buttonFnc[1]

  function updateAnimalCloseBox() {
    closeFullCard();
    emptyAnimal();
  }

  try {
    return (
      <div className="fullAnimalCard">
        <div className="name">{animalArray.name}</div>
        <Button text="CLOSE" fill="orange" function={updateAnimalCloseBox} />
        <TopInfo animalArray={animalArray} />

        {animalArray.habitatInfo.exhibit ? (
          <ExhibitInfo animalArray={animalArray} />
        ) : (
          <NormalAnimal animalArray={animalArray} />
        )}
      </div>
    );
  } catch (err) {
      //console.log(err)
    return <></>;
  }
}
