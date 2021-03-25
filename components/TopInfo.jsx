import React from 'react'
import trueOrFalseParse from "../functions/TrueOrFalse";

export default function TopInfo({animalArray}) {
    return (
      <div>
        <div id="top">
          <div
            className="image"
            style={{
              backgroundImage: `url(${animalArray.imageLink})`,
            }}></div>
          <div className="desc">{animalArray.desc}</div>
        </div>
        <div id="infoFlex">
          <div id="continent">
            <div className="flexName">Continent</div>
            <div className="flexContent">{animalArray.continent}</div>
          </div>
          <div id="biome">
            <div className="flexName">Biome</div>
            <div className="flexContent">
              {animalArray.biome.map((row) => row + ", ")}
            </div>
          </div>
          <div id="swim">
            <div className="flexName">Can Swim?</div>
            <div className="flexContent">
              {trueOrFalseParse(animalArray.swim)}
            </div>
          </div>

          <div>
            <div className="flexName">Life Expectancy</div>
            <div className="flexContent">
              Male: {animalArray.lifeExpectancy.male} years | Female:{" "}
              {animalArray.lifeExpectancy.female} years
            </div>
          </div>
        </div>
      </div>
    );
}
