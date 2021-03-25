import React from "react";
import removeActiveButton from "../functions/removeButtonActive";

export default function Filters(props) {
  const animals = props.array;
  const updateArray = props.function;

  const handleContinent = (e) => {
    if (e.target.classList.contains("activeButton")) {
      e.target.classList.remove("activeButton");
      updateArray(animals);
    } else {
      removeActiveButton();
      e.target.classList.add("activeButton");
      let filteredArray = [];
      animals.forEach((row, i) => {
        row.continent.includes(e.target.innerText) &&
          filteredArray.push(animals[i]);
      });
      updateArray(filteredArray);
    }
  };
  const handleBiome = (e) => {
    if (e.target.classList.contains("activeButton")) {
      e.target.classList.remove("activeButton");
      updateArray(animals);
    } else {
      removeActiveButton();
      e.target.classList.add("activeButton");
      let filteredArray = [];
      animals.forEach((row, i) => {
        row.biome.includes(e.target.innerText) &&
          filteredArray.push(animals[i]);
      });
      updateArray(filteredArray);
    }
  };
  return (
    <div id="filters">
      <div id="continent">
        <h3>or Filter by Continent</h3>
        <div className="filterCat">
          <button className="stdButton grayFill  " onClick={(e) => handleContinent(e)}>
            Africa
          </button>
          <button className="stdButton grayFill " onClick={(e) => handleContinent(e)}>
            Central America
          </button>
          <button className="stdButton grayFill " onClick={(e) => handleContinent(e)}>
            Europe
          </button>
          <button className="stdButton grayFill " onClick={(e) => handleContinent(e)}>
            North America
          </button>
          <button className="stdButton grayFill " onClick={(e) => handleContinent(e)}>
            Oceania
          </button>
          <button className="stdButton grayFill " onClick={(e) => handleContinent(e)}>
            South America
          </button>
        </div>
      </div>
      <div id="biome">
        <h3>or Filter by Biome</h3>
        <div className="filterCat">
          <button className="stdButton grayFill " onClick={(e) => handleBiome(e)}>
            Aquatic
          </button>
          <button className="stdButton grayFill " onClick={(e) => handleBiome(e)}>
            Desert
          </button>
          <button className="stdButton grayFill " onClick={(e) => handleBiome(e)}>
            Grassland
          </button>
          <button className="stdButton grayFill " onClick={(e) => handleBiome(e)}>
            Taiga
          </button>
          <button className="stdButton grayFill " onClick={(e) => handleBiome(e)}>
            Temperate
          </button>
          <button className="stdButton grayFill " onClick={(e) => handleBiome(e)}>
            Tropical
          </button>

          <button className="stdButton grayFill " onClick={(e) => handleBiome(e)}>
            Tundra
          </button>
        </div>
      </div>
    </div>
  );
}
