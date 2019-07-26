import React from "react";
import styled from "styled-components";
import dogs from "../events_stub.json";

const Card = ({ name, avatar, breed, trainer, time }) => {
  return (
    <CardStyle>
      <div className="avatar"> {avatar} </div>{" "}
      <div className="name"> {name} </div>{" "}
      <div className="breed"> {breed} </div>{" "}
      <div className="trainer"> {trainer} </div>{" "}
      <div className="time"> {time} </div>{" "}
    </CardStyle>
  );
};

const CardStyle = styled.div`
  display: grid;
  height: 100px;
  grid-template:
    "avatar name breed" 50px
    "avatar trainer time" 50px
    / 100px 1fr 80px;
  box-shadow: 1px 1px 3px;
  align-items: center;
  margin: 10px;
  padding: 0.5rem;
  .avatar {
    grid-area: avatar;
  }
  .name {
    grid-area: name;
    font-weight: bold;
  }

  .breed {
    grid-area: breed;
    text-align: right;
  }
  .trainer {
    grid-area: trainer;
  }
  .time {
    grid-area: time;
    text-align: right;
  }
`;

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
