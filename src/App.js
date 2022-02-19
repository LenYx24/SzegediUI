import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import DrawBoard from "./pages/subpages/Drawboard.js";
import YourIdeaList from "./pages/subpages/YourIdeaList.js";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserAlt } from "react-icons/fa";

function App() {
  const [user, setUser] = useState({ name: "leny" });
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg" id="nav">
        <Container>
          <Navbar.Brand>Ötlet Zóna</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">
                <Link to="/">Főoldal</Link>
              </Nav.Link>
              <NavDropdown title="Elosztó" menuVariant="dark">
                <NavDropdown.Item>
                  <Link to="/youridealist">ötlet lista</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/drawboard">rajztábla</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Megosztás</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Rólunk</Nav.Link>
              <Nav.Link>Segítség</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown
              title={
                <>
                  <FaUserAlt /> <a href="#login">{user.name}</a>
                </>
              }
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.2">
                Statisztika
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Beállítások
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Kijelentkezés
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="mainDiv">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/drawboard" element={<DrawBoard />} />
          <Route path="/youridealist" element={<YourIdeaList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
