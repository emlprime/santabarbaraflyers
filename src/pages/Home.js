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
          <Link to="/home">
            <p className="">Home</p>
          </Link>
          <Link to="/events">
            <p className="">Events</p>
          </Link>
          <Link to="/standings">
            <p className="">Standings</p>
          </Link>
        </Col1>

        <Col2>
          <Route exact path="/events" component={Events} />
          {/* <Route exact path="/" component={} /> */}
          {/* <Route exact path="/standings" component={} />
          <Route exact path="/hone" component={} /> */}
        </Col2>
      </Container>
    </Router>
  );
}

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
  margin: 5% 14% 0 0;
  flex-grow: 10;
`;

export default Home;
