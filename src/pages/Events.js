import React from "react";
import styled from "styled-components";
import dogs from "../events_stub.json";
import Card from "../atoms/Card";
const jumpHeights = [8, 10, 20, 24];

const Events = () => {
  return (
    <Style>
      <h1> Events </h1> <h2> Standard </h2>
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
  grid-template: "header" 30px "subheader" 32px "content";
  h1 {
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
