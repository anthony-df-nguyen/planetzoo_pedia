import Head from "next/head";
import { useState, useEffect } from "react";
import animals from "../data/animals";
import Card from "../components/Card";
import AnimalCard from "../components/AnimalCard";
import Searchbar from "../components/Searchbar";
import SearchAnimalList from "../functions/TextSearchAnimalList";
import Filters from "../components/Filter";

export default function Home() {
  const buildAnimalList = () => {
    return animalList.map((row, i) => (
      <Card
        key={i}
        name={row.name}
        pic={row.imageLink}
        click={updateSelectedAnimal}
      />
    ));
  };

  const [animalList, updateAnimalList] = useState(animals);
  const [searchTerm, updateSearchTerm] = useState();
  const [selectedAnimal, updateSelectedAnimal] = useState();
  const [displayFullCard, updateFullCardDisplay] = useState("none");

  //Filter list when text searching
  useEffect(() => {
    const filteredArray = SearchAnimalList(animals, searchTerm);
    updateAnimalList(filteredArray);
  }, [searchTerm]);

  // //Load Full card when Animal is Clicked
  useEffect(() => {
    if (selectedAnimal) {
      updateFullCardDisplay("block");
    }
  }, [selectedAnimal]);
  return (
    <div>
      <Head>
        <title>Planet Zoo Animal Companion</title>
        <meta
          name="Planet Zoo Animal Companion"
          content="A simple web app to view the Planet Zoo Animal Zoopedia in a quick way on desktop and mobile"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="topHead">
        <div className="wrapper">
          <h1 id="siteName">Planet Zoo Animal Companion</h1>
          <div>
            <h3 style={{ marginBottom: "1rem" }}>Search by Name</h3>
            <Searchbar function={updateSearchTerm}></Searchbar>
            <Filters function={updateAnimalList} array={animals} />
          </div>
        </div>
      </div>
      <div id="cardFlexBG">
        <div className="wrapper">
          <div id="cardFlex">{buildAnimalList()}</div>
        </div>
      </div>

      <div id="backdrop" style={{ display: displayFullCard }}>
        <AnimalCard
          buttonFnc={[
            () => updateFullCardDisplay("none"),
            () => updateSelectedAnimal(),
          ]}
          array={animals.filter((row) => row.name === selectedAnimal)}
        />
      </div>
    </div>
  );
}
