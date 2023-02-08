import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import C1036 from "./components/C1036";
import C2036 from "./components/C2036";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Assignment</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/"
                >
                  C1036
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/c2036"
                >
                  C2036
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<C1036 />} />
        <Route path="/c2036" element={<C2036 />} />
      </Routes>
    </div>
  );
}

export default App;
