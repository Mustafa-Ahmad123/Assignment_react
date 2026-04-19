import React from 'react';
import { ButtonGroup, Button, Container } from 'react-bootstrap';

const FilterBar = ({ setFilter }) => {
  const categories = ['All', 'Tech', 'Sports', 'Arts'];

  return (
    <Container className="mb-4 d-flex justify-content-center">
      <ButtonGroup>
        {categories.map((category) => (
          <Button 
            key={category} 
            variant="outline-primary" 
            onClick={() => setFilter(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export default FilterBar;