import React from "react";
import styled from "styled-components";
const Card = ({ name }) => {
  return <div>{name}</div>;
};

const Events = () => {
  return (
    <Style>
      <h1>Events</h1>
      <h2>Standard</h2>
      <div>
        <ul>
          <li>
            8"
            <Card
              name="Fido"
              breed="Mini Poodle"
              trainer="Joan White"
            />
            <Card
              name="Rolf"
              breed="Corgie"
              trainer="Brenda Smith"
            />
            <Card name="Pixie" />
            <Card name="Brittney" />
          </li>
          <li>
            20"
            <Card name="Rex" />
            <Card name="Masterson" />
            <Card name="Val" />
          </li>
          <li>
            24"
            <Card name="Thor dog of Thunder" />
          </li>
        </ul>
      </div>
    </Style>
  );
};

export default Events;

const Style = styled.section`
  * {
    margin: 0;
    padding: 0;
  }
  outline: 1px solid red;
  height: 95vh;
  display: grid;
  grid-template: "header" 30px "subheader" 32px "content";
  h1 {
    outline: 1px solid green;
  }
  h2 {
    outline: 1px solid pink;
  }
  div {
    outline: 1px solid purple;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      li {
      }
    }
  }
`;
