import React from "react";

export default function ExhibitInfo({ animalArray }) {
  return (
    <div>
      {" "}
      <h3>Habitat Info</h3>
      <div id="habitatInfo">
        <div>
          <div className="flexName">Humidity</div>
          <div className="flexContent">
            {animalArray.habitatInfo.humidity.min} -{" "}
            {animalArray.habitatInfo.humidity.max}
          </div>
        </div>
        <div>
          <div className="flexName">Temperature</div>
          <div className="flexContent">
            {animalArray.habitatInfo.temperature.min} -{" "}
            {animalArray.habitatInfo.temperature.max}℃
          </div>
        </div>
      </div>
    </div>
  );
}
