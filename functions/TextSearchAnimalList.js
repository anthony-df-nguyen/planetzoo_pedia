import React from "react";
import _ from "lodash";

const SearchAnimalList = (animals,searched) => {
  const lowerSearch = _.lowerCase(searched);
  const filteredArray = animals.filter((row, i) => {
    const lowerName = _.lowerCase(row.name);
    return lowerName.includes(lowerSearch) && 1;
  });
  return filteredArray;
};

export default SearchAnimalList;