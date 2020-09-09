import React from 'react';

import { Container, LevelBar } from './styles';

interface Props {
  title: string;
  level: number;
  image: string;
  color: string;
}

const Skill: React.FC<Props> = ({ title, image, level, color }) => (
  <Container>
    <small>{title}</small>
    <img src={image} alt={title} />
    <LevelBar level={level} color={color} />
  </Container>
);

export default Skill;
