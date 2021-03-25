import React from "react";
import trueOrFalseParse from "../functions/TrueOrFalse";

export default function NormalAnimal({ animalArray }) {
  return (
    <div>
      <div className="flexGrouping">
        <h3>Habitat Info</h3>
        <div id="habitatInfo">
          <div>
            <div className="flexName">Fence</div>
            <div className="flexContent">
              Grade: {animalArray.habitatInfo.fence.grade} <br></br>
              Height: {animalArray.habitatInfo.fence.height}
              <br></br>
              Climb-proof:{" "}
              {trueOrFalseParse(animalArray.habitatInfo.fence.climbproof)}
            </div>
          </div>
          <div>
            <div className="flexName">Land</div>
            <div className="flexContent">
              {animalArray.habitatInfo.land}m<sup>2</sup> | +
              {animalArray.habitatInfo.landAdd}m<sup>2</sup> per
            </div>
          </div>
          <div>
            <div className="flexName">Water </div>
            <div className="flexContent">
              {animalArray.habitatInfo.water}m<sup>2</sup> | +
              {animalArray.habitatInfo.waterAdd}m<sup>2</sup> per
            </div>
          </div>
          <div>
            <div className="flexName">Climbing</div>
            <div className="flexContent">
              {animalArray.habitatInfo.climbable}m<sup>2</sup> | +
              {animalArray.habitatInfo.climbableAdd}m<sup>2</sup> per
            </div>
          </div>
          <div>
            <div className="flexName">Temperature</div>
            <div className="flexContent">
              {animalArray.habitatInfo.temperature.min} -{" "}
              {animalArray.habitatInfo.temperature.max}℃
            </div>
          </div>
          <div>
            <div className="flexName">Guest Can Enter</div>
            <div className="flexContent">
              {trueOrFalseParse(animalArray.habitatInfo.guestCanEnter)}
            </div>
          </div>
        </div>
      </div>
      <div className="flexGrouping">
        <h3>Social Info</h3>
        <div id="socialInfo">
          <div>
            <div className="flexName">Males Min | Max</div>
            <div className="flexContent">
              {animalArray.habitatInfo.groupMale.size.min} |{" "}
              {animalArray.habitatInfo.groupMale.size.max}
            </div>
          </div>
          <div>
            <div className="flexName">Females Min | Max</div>
            <div className="flexContent">
              {animalArray.habitatInfo.groupFemale.size.min} |{" "}
              {animalArray.habitatInfo.groupFemale.size.max}
            </div>
          </div>
          <div>
            <div className="flexName">Mixed Totals Min | Max</div>
            <div className="flexContent">
              {animalArray.habitatInfo.groupMixed.size.min} |{" "}
              {animalArray.habitatInfo.groupMixed.size.max}
            </div>
          </div>
          <div>
            <div className="flexName">Mixed by Sex Male | Female</div>
            <div className="flexContent">
              {animalArray.habitatInfo.groupMixed.male} |{" "}
              {animalArray.habitatInfo.groupMixed.female}
            </div>
          </div>
          <div>
            <div className="flexName">Relationship w/ Humans</div>
            <div className="flexContent">{animalArray.relationship_human}</div>
          </div>
          <div>
            <div className="flexName">Mating System</div>
            <div className="flexContent">{animalArray.mating}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
