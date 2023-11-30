import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ConsultCard from "../hero-card";
import Breadcrumbs from "./breadcrumbs";


export const Home = () => {
  return (
    <>
      <Container fluid>
      <Row>
      </Row>
      <Row>
        <Col>
          <ConsultCard />
        </Col>
        <Col>
          <img className="img-fluid max-width: 100% height: auto" src="\assets\image4.jpg" alt="hero image" />
        </Col>
      </Row>
      <main></main>
      </Container>
    </>
  );
};

export default Home;