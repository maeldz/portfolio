import React from 'react';

import portfolioData from '../../static/data';

import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <span>{`© 2020 ${portfolioData.personal.name} - Designed by`}</span>
    <a href="https://dribbble.com/laviniamelo" target="_blank" rel="noreferrer">
      Lavinia Melo
    </a>
  </Container>
);

export default Footer;
