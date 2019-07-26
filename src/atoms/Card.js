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

export default Card;
