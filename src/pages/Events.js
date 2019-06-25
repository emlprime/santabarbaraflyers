import React from "react";
import styled from "styled-components";

const Card = ({ name, avatar, breed, trainer, time }) => {
  return (
    <CardStyle>
      <div className="avatar">{avatar}</div>
      <div className="name">{name}</div>
      <div className="breed">{breed}</div>
      <div className="trainer">{trainer}</div>
      <div className="time">{time}</div>
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
  .avatar {
    grid-area: avatar;
  }
  .name {
    grid-area: name;
  }

  .breed {
    grid-area: breed;
  }
  .trainer {
    grid-area: trainer;
  }
  .time {
    grid-area: time;
  }
`;

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
              avatar="Avatar woo"
              name="Fido"
              breed="Mini Poodle"
              trainer="Joan White"
              time="7:00pm"
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
