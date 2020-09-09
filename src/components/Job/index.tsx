import React from 'react';

import { Container, Tags } from './styles';

interface Props {
  title: string;
  tags: string[];
  image: string;
  description: string;
  url: string;
}

const Job: React.FC<Props> = ({ title, image, description, tags, url }) => (
  <Container>
    <img src={image} alt={title} />

    <div>
      <span>{title}</span>
      <p>{description}</p>
      <Tags className="tags">
        {tags.map(tag => (
          <div key={tag}>{tag}</div>
        ))}
      </Tags>
    </div>
    <a role="button" href={url} target="_blank" rel="noreferrer">
      ACESSAR
    </a>
  </Container>
);

export default Job;
