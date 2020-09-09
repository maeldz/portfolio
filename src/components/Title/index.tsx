import React from 'react';

import { Container } from './styles';

const Title: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children, id }) => (
  <Container id={id}>
    <div className="outside b-shadow">
      <div className="inside" />
    </div>
    <strong>{children}</strong>
  </Container>
);

export default Title;
