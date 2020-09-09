import React, { useState } from 'react';
import Link from 'next/link';

import logo from '../../assets/logo.png';

import { Container, Menu, MenuIcon } from './styles';

const Header: React.FC = () => {
  const [active, setActive] = useState('about');
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    document.querySelector('body').style.overflow = !clicked
      ? 'hidden'
      : 'initial';

    setClicked(!clicked);
  }

  function handleMakeActive(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    const { id } = e.target as HTMLAnchorElement;

    setActive(id);

    if (clicked) {
      handleClick();
    }
  }

  return (
    <Container active={clicked}>
      <img src={logo} alt="" />

      <MenuIcon className="menu-toggle" onClick={handleClick}>
        <div className="one" />
        <div className="two" />
        <div className="three" />
      </MenuIcon>

      <Menu>
        <ul>
          <li>
            <Link href="#about-section">
              <a
                id="about"
                className={active === 'about' ? 'active' : null}
                onClick={handleMakeActive}
                role="button"
                tabIndex={0}
              >
                Sobre
              </a>
            </Link>
          </li>
          <li>
            <Link href="#skills-section">
              <a
                id="skills"
                className={active === 'skills' ? 'active' : null}
                onClick={handleMakeActive}
                role="button"
                tabIndex={-1}
              >
                Skills
              </a>
            </Link>
          </li>
          <li>
            <Link href="#jobs-section">
              <a
                id="jobs"
                className={active === 'jobs' ? 'active' : null}
                onClick={handleMakeActive}
                role="button"
                tabIndex={-2}
              >
                Projetos
              </a>
            </Link>
          </li>
          <li>
            <Link href="#contact-section">
              <a
                id="contact"
                className={active === 'contact' ? 'active' : null}
                onClick={handleMakeActive}
                role="button"
                tabIndex={-3}
              >
                Contato
              </a>
            </Link>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
