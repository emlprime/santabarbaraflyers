import React from "react";
import styled from "styled-components";

const Events = () => {


	return <Style>
		<h1>Events</h1>
		<h2>Standard</h2>
		<div>Content</div>
	</Style>





}

export default Events;


const Style = styled.section`
*{margin:0;
padding:0;}
outline: 1px solid red;
height: 95vh;
display:grid;
grid-template: "header" 70px "subheader" 67px "content";
h1{outline:1px solid green};
h2{outline: 1px solid pink};
div{outline:1px solid purple};
`