/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components';

interface MenuIconProps {
  active: boolean;
}

export const Container = styled.div<MenuIconProps>`
  @media (max-width: 530px) {
    nav {
      display: none;

      ul {
        text-align: center;
        display: block;

        a {
          transition-duration: 0.5s !important;
          font-size: 3rem !important;
          line-height: 8rem !important;
          display: block;

          &:hover,
          &.active {
            color: ${props => props.theme.colors.background};
            text-shadow: 0px 0px 3px ${props => props.theme.colors.background};
          }
        }
      }
    }

    .one,
    .two,
    .three {
      background-color: #fff;
      height: 3px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;
    }

    ${props =>
      props.active &&
      css`
        img {
          display: none;
        }

        .menu-toggle {
          position: absolute;
          right: 25px;
          top: 15px;

          .one {
            transform: rotate(45deg) translate(7px, 7px);
          }

          .two {
            opacity: 0;
          }

          .three {
            transform: rotate(-45deg) translate(6px, -6px);
          }
        }

        nav {
          display: block;
        }

        position: absolute;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;

        background: ${props.theme.colors.secondary};

        z-index: 10;

        display: flex;
        justify-content: center;
        align-items: center;
      `}
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  max-width: 980px;
  margin: auto;
  padding: 20px 0;

  img {
    width: 150px;
  }
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 30px;
`;

export const Menu = styled.nav`
  ul {
    display: flex;

    li {
      list-style: none;

      a {
        text-decoration: none;
        transition-duration: 0.5s;
        outline: none;
        display: block;
        color: white;
        font-size: 1.6rem;
        padding-left: 3rem;
        position: relative;

        &:hover,
        &.active {
          &::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 3rem;
            width: calc(50% - 1.5rem);
            border-top: 2px solid ${props => props.theme.colors.secondary};
            box-shadow: 0px 0px 3px ${props => props.theme.colors.secondary};
          }
        }
      }
    }
  }
`;
