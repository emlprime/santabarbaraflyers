import React from "react";
import Events from "./Events";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function Home() {
  return (
    <Router>
      <Container>
        <Col1>
          <Style>
            <Link to="/home">
              <h2 className="">Home</h2>
            </Link>
            <Link to="/events">
              <h2 className="">Events</h2>
            </Link>
            <Link to="/standings">
              <h2 className="">Standings</h2>
            </Link>
          </Style>
        </Col1>

        <Col2>
          <Route exact path="/events" component={Events} />
          <Route exact path="/" component={Events} />
          {/* <Route exact path="/standings" component={} />
          <Route exact path="/hone" component={} /> */}
        </Col2>
      </Container>
    </Router>
  );
}

const Style = styled.section`
  a {
    text-decoration: none;
    color: black;
  }
  ,
  a:hover {
    color: gray;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Col1 = styled.div`
  flex-grow: 1;
  margin: 5%;
`;

const Col2 = styled.div`
  margin: 8% 14% 0 0;
  flex-grow: 10;
`;

export default Home;
