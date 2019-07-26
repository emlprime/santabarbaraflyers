import React from "react";
import styled from "styled-components";

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
  .avatar {
    grid-area: avatar;
  }
  .name {
    grid-area: name;
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

const standardEight = [
  {
    avatar: "Avatar woo",
    name: "Fido",
    breed: "Mini Poodle",
    trainer: "Joan White",
    time: "7:00pm"
  },
  {
    avatar: "Avatar2",
    name: "Rolf",
    breed: "Corgie",
    trainer: "Brenda Smith",
    time: "7:10pm"
  }
];

const standardTwenty = [
  {
    avatar: "Kristin",
    name: "Frejka",
    breed: "Icelandic Sheepdog",
    trainer: "KH",
    time: "7:20pm"
  },
  {
    avatar: "Peter",
    name: "Donk",
    breed: "Poodle",
    trainer: "PS",
    time: "7:30pm"
  }
];

const standardTwentyFour = [
  {
    avatar: "Derek",
    name: "Rusty",
    breed: "Golden",
    trainer: "DC",
    time: "7:40pm"
  },
  {
    avatar: "Jack",
    name: "Ponga",
    breed: "Cool",
    trainer: "JW",
    time: "7:50pm"
  }
];

const Events = () => {
  return (
    <Style>
      <h1> Events </h1> <h2> Standard </h2>
      <div>
        <ul>
          <li>
            8 "
            {standardEight.map(dog => (
              <Card {...dog} />
            ))}
          </li>
          <li>
            20 "
            {standardTwenty.map(dog => (
              <Card {...dog} />
            ))}
          </li>
          <li>
            24 "
            {standardTwentyFour.map(dog => (
              <Card {...dog} />
            ))}
          </li>
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
  > div {
    outline: 1px solid purple;
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
