import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div id="heroDiv">
      <Container>
        <Row>
          <div class="p-5 rounded-lg m-3 jumbatron">
            <h1 class="display-1 font-weight-bold">Hello, world!</h1>
            <p class="lead font-weight-bold">
              Ha szeretsz ötletelni, akkor regisztrálj most, hogy kihozd az
              innovatív oldaladat. Hasznos funkciók segítségével akadálymentesen
              tudsz az ötletelésre fókuszálni
            </p>
            <hr class="my-4" />
            <p>A regisztráció ingyenes</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
