import React from 'react';
import { Navbar, Container, Nav, Form, Button, Badge } from 'react-bootstrap';

const TopNavbar = ({ totalRegistrations, searchQuery, setSearchQuery }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container fluid>
        <Navbar.Brand href="#home" className="fw-bold">FAST Fest 2026</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" active>Home</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
          </Nav>
          
          <div className="d-flex align-items-center me-3 mb-2 mb-lg-0">
            <span className="fw-semibold">
              Total Registrations: <Badge bg="success" className="ms-1">{totalRegistrations}</Badge>
            </span>
          </div>

          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Search events..."
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;