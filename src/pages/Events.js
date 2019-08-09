import React from "react";
import styled from "styled-components";
import dogs from "../events_stub.json";
import Card from "../atoms/Card";
import SelectFilter from "../atoms/SelectFilter";

const jumpHeights = [8, 10, 20, 24];

const Events = () => {
  const rings = ["Ring 1", "Ring 2"];
  const levels = ["Masters", "Performance"];
  const height = ["20", "16"];
  const events = ["Jumpers", "Gamblers"];

  return (
    <Style>
      <h1> Events </h1>
      <ul>
        <li>
          <SelectFilter filters={rings} />
        </li>
        <li>
          {" "}
          <SelectFilter filters={levels} />
        </li>
        <li>
          <SelectFilter filters={events} />
        </li>
        <li>
          <SelectFilter filters={height} />
        </li>
      </ul>
      <h2> Standard </h2>
      <div>
        <ul>
          {jumpHeights.map(height => (
            <li>
              {height}"
              {dogs[height] &&
                dogs[height].map(dog => <Card {...dog} />)}
            </li>
          ))}
        </ul>
      </div>
    </Style>
  );
};

export default Events;

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
  grid-template: "header" 30px "filters" auto "subheader" 32px "content";
  h1 {
  }

  > ul {
    display: flex;
    justify-content: flex-start;

    > li {
      margin-right: 2rem;
    }
  }

  h2 {
    margin-left: 1em;
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
