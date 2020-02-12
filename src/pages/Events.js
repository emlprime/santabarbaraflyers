import React, { useState } from "react";
import styled from "styled-components";
import data from "../events_stub.json";
import Card from "../atoms/Card";
import SelectFilter from "../atoms/SelectFilter";

const jumpHeights = ["All", "8", "10", "20", "24"];
const filterDogs = (currentName, dogs) => {
  console.log(currentName);
  return currentName !== ""
    ? dogs.filter(dog => {
        return (
          // is there a better way to do this?
          dog.name.match(new RegExp(currentName, "i")) ||
          dog.trainer.match(new RegExp(currentName, "i")) ||
          dog.breed.match(new RegExp(currentName, "i")) ||
          dog.avatar.match(new RegExp(currentName, "i")) ||
          dog.time.match(new RegExp(currentName, "i"))
        );
      })
    : dogs;
};

const Events = () => {
  const [currentHeight, setCurrentHeight] = useState();
  const [currentRing, setCurrentRing] = useState();
  const [currentEvent, setCurrentEvent] = useState(
    "Jumpers"
  );
  const [currentLevel, setCurrentLevel] = useState(
    "Masters"
  );
  const [currentName, setCurrentName] = useState("");

  const rings = ["Ring 1", "Ring 2"];
  const levels = ["Masters", "Novice"];
  const events = ["Jumpers", "Gamblers"];
  const filteredJumpHeights =
    currentHeight && currentHeight !== "All"
      ? jumpHeights.filter(height => {
          return height === currentHeight;
        })
      : jumpHeights;
  console.log(currentName);
  // const filteredRings =
  //   currentRing && currentRing !== "All"
  //     ? rings.filter(ring => {
  //       return ring === currentRing;
  //     }) : rings;

  console.log(data[currentLevel][currentEvent]);
  console.log(currentName);
  const { dogs } = data[currentLevel][currentEvent];

  return (
    <Style>
      <h1> Events </h1>
      <ul>
        <li>
          <SelectFilter filters={rings} />
        </li>
        <li>
          <SelectFilter
            filters={levels}
            onChange={e => setCurrentLevel(e.target.value)}
          />
        </li>
        <li>
          <SelectFilter
            filters={events}
            onChange={e => setCurrentEvent(e.target.value)}
          />
        </li>
        <li>
          <SelectFilter
            filters={jumpHeights}
            onChange={e => setCurrentHeight(e.target.value)}
          />
        </li>
      </ul>
      <Search>
        <input
          type="text"
          placeholder="insert magnifying glass here"
          onChange={e => setCurrentName(e.target.value)}
          value={currentName}
        />
        <button onClick={e => console.log("click")}>
          push me
        </button>
      </Search>
      <h2> Standard </h2>
      <div>
        <ul>
          {filteredJumpHeights.map(height => (
            <li key={height}>
              {dogs[height] &&
              filterDogs(currentName, dogs[height]).length >
                0
                ? height + '"'
                : ""}

              {dogs[height] &&
                filterDogs(
                  currentName,
                  dogs[height]
                ).map(dog => <Card {...dog} />)}
            </li>
          ))}
        </ul>
      </div>
    </Style>
  );
};

export default Events;
const Search = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-left: 7%;
  > input {
    width: 80%;
  }
`;
const Style = styled.section`
  h1,
  h2 {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
  }

  height: 95vh;
  width: 100%;
  display: grid;
  grid-template: "header" 50px "filters" auto "Search" auto "subheader" 50px "content";
  h1 {
    grid-area: header;
  }

  > ul {
    display: flex;
    justify-content: flex-start;
    grid-area: filters;

    > li {
      margin-right: 2rem;
    }
  }

  h2 {
    margin-left: 1em;
    grid-area: subheader;
    align-self: flex-end;
  }
  > div {
    > ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      > li {
        margin-bottom: 1em;
      }
    }
  }
`;
