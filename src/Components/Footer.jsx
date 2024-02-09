import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Navbar.Text className="mx-auto">
          © 2024 MeteoApp - SIMONE MANCA
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
