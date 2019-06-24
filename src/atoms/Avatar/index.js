import React, {useState} from "react";
import styled from "styled-components";

const Avatar = () => {
  return <Style title="Mydog">My Dog</Style>;
};

export default Avatar;

const Style = styled.div`
  outline: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
  width: 100px;
  height: 100px;
`;
