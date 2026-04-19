import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import TopNavbar from './Components/Navbar';
import FilterBar from './Components/FilterBar';
import EventCard from './Components/EventCard';
import Footer from './Components/Footer';

function App() {
  const [totalRegistrations, setTotalRegistrations] = useState(0);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [events, setEvents] = useState([
    { id: 1, title: "Coding Competition", desc: "Solve algorithmic problems under time pressure", category: "Tech", seats: 2 },
    { id: 2, title: "Gaming Tournament", desc: "Compete in multiplayer games", category: "Sports", seats: 1 },
    { id: 3, title: "Singing Competition", desc: "Showcase your vocal talent", category: "Arts", seats: 3 },
    { id: 4, title: "Hackathon", desc: "Build a project in 24 hours", category: "Tech", seats: 2 },
    { id: 5, title: "Debate Competition", desc: "Argue and persuade on trending topics", category: "Arts", seats: 1 }
  ]);

  const handleRegister = (title) => {
    setTotalRegistrations(prev => prev + 1);
    setRegisteredEvents(prev => [...prev, title]);
    setEvents(prevEvents => prevEvents.map(event =>
      event.title === title ? { ...event, seats: event.seats - 1 } : event
    ));
  };

  let processedEvents = events.filter(event => {
    const matchesFilter = filter === 'All' ? true : event.category === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  processedEvents = processedEvents.sort((a, b) => a.seats - b.seats);

  const totalSeatsLeft = events.reduce((sum, event) => sum + event.seats, 0);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <TopNavbar
        totalRegistrations={totalRegistrations}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Container className="flex-grow-1 mt-4">
        <FilterBar setFilter={setFilter} />
        {registeredEvents.length > 0 && (
          <div className="mb-4 text-center">
            <h5 className="text-muted">Registered Events:</h5>
            <p className="text-success fw-bold fs-5">{registeredEvents.join(", ")}</p>
          </div>
        )}
        {totalSeatsLeft === 0 && (
          <Alert variant="danger" className="text-center fw-bold shadow-sm">
            All Events Are Full
          </Alert>
        )}
        <Row>
          {processedEvents.map(event => (
            <Col md={4} sm={12} key={event.id} className="mb-4">
              <EventCard
                title={event.title}
                desc={event.desc}
                category={event.category}
                seats={event.seats}
                onRegister={handleRegister}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;