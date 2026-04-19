import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const EventCard = ({ title, desc, category, seats, onRegister }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(seats); 

  
  const handleRegisterClick = () => {
    if (seatsLeft > 0 && !isRegistered) {
      setSeatsLeft(prev => prev - 1); 
      setIsRegistered(true);          
      onRegister(title);              
    }
  };

  return (
    <Card border={isRegistered ? "success" : "primary"} className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-start">
          <span>{title}</span>
          <Badge bg="secondary" className="ms-2">{category}</Badge>
        </Card.Title>
        
        <Card.Text className="text-muted flex-grow-1">
          {desc}
        </Card.Text>
        
        <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
          <Card.Text className="mb-0 fw-bold">
            Seats Left: <span className={seatsLeft === 0 ? "text-danger" : ""}>{seatsLeft}</span>
          </Card.Text>
          
          <Button 
            variant={isRegistered ? "success" : "primary"} 
            disabled={isRegistered || seatsLeft === 0} 
            onClick={handleRegisterClick}
          >
            {isRegistered ? "Registered" : seatsLeft === 0 ? "Full" : "Register"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;