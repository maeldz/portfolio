import React from 'react';
import Head from 'next/head';
import { FaRegEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

import portfolioData from '../static/data';

import Title from '../components/Title';
import Skill from '../components/Skill';
import Job from '../components/Job';

import theme from '../styles/theme';

import {
  Container,
  Main,
  About,
  Profile,
  Skills,
  Jobs,
  Contact,
} from '../styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Portfólio</title>
    </Head>
    <Main>
      <span className="t-shadow">{portfolioData.personal.role}</span>
      <strong>{portfolioData.personal.name}</strong>
      <p>{portfolioData.personal.description}</p>
      <a
        role="button"
        href={portfolioData.personal.cv}
        target="_blank"
        rel="noreferrer"
        className="b-shadow t-shadow"
      >
        BAIXAR CURRÍCULO
      </a>
    </Main>

    <Title id="about-section">Sobre</Title>

    <About>
      <Profile>
        <div className="image-border b-shadow">
          <img
            src={portfolioData.personal.image}
            alt={portfolioData.personal.name}
          />
        </div>

        <strong>{portfolioData.personal.name}</strong>

        <div className="social-icons">
          <a
            href={`mailto:${portfolioData.contacts.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaRegEnvelope
              color={theme.colors.secondary}
              className="svg-shadow"
            />
          </a>
          <a
            href={portfolioData.contacts.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color={theme.colors.secondary} className="svg-shadow" />
          </a>
          <a
            href={portfolioData.contacts.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color={theme.colors.secondary} className="svg-shadow" />
          </a>
        </div>
      </Profile>

      <div className="about-right-side">
        <h3>{portfolioData.about.title}</h3>
        <p>{portfolioData.about.description}</p>
      </div>
    </About>

    <Title id="skills-section">Skills</Title>

    <Skills>
      {portfolioData.skills.map(skill => (
        <Skill
          key={skill.name}
          title={skill.name}
          color={skill.color}
          level={skill.level}
          image={skill.image}
        />
      ))}
    </Skills>

    <Title id="jobs-section">Projetos</Title>

    <Jobs>
      {portfolioData.jobs.map(job => (
        <Job
          key={job.title}
          title={job.title}
          image={job.image}
          description={job.description}
          url={job.url}
          tags={job.tags}
        />
      ))}
    </Jobs>

    <Title id="contact-section">Contato</Title>

    <Contact>
      <div>
        <FaPhone color={theme.colors.secondary} className="svg-shadow" />
        <span>{portfolioData.contacts.phone}</span>
      </div>
      <div>
        <FaGithub color={theme.colors.secondary} className="svg-shadow" />
        <a href={portfolioData.contacts.github}>
          {portfolioData.contacts.github}
        </a>
      </div>
      <div>
        <FaRegEnvelope color={theme.colors.secondary} className="svg-shadow" />
        <a href={`mailto:${portfolioData.contacts.github}`}>
          {portfolioData.contacts.email}
        </a>
      </div>
      <div>
        <FaLinkedin color={theme.colors.secondary} className="svg-shadow" />
        <a href={portfolioData.contacts.linkedin}>
          {portfolioData.contacts.linkedin}
        </a>
      </div>
    </Contact>
  </Container>
);

export default Home;
