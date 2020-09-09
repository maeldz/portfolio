import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  max-width: 980px;
  margin: auto;
`;

export const Main = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: ${props => props.theme.colors.secondary};
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: bold;
  }

  strong {
    font-size: 3.5rem;
    line-height: 4.2rem;
    font-weight: normal;
    text-transform: capitalize;
  }

  p {
    margin-top: 30px;
    color: ${props => props.theme.colors.text};
    line-height: 2.2rem;
  }

  a {
    display: flex;
    align-items: center;
    align-self: center;
    background: none;
    text-decoration: none;
    height: 46px;
    border: 2px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    transition: opacity 0.4s;
    margin-top: 30px;
    padding: 0 30px;
    font-size: 1.4rem;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const About = styled.section`
  display: flex;
  justify-content: space-between;

  div.about-right-side {
    width: 50%;

    h3 {
      margin-bottom: 10px;
    }

    p {
      color: ${props => props.theme.colors.text};
      line-height: 2.2rem;
      white-space: pre-line;
    }
  }
`;

export const Profile = styled.div`
  @media (max-width: 530px) {
    div.image-border {
      width: 110px !important;
      height: 110px !important;
      img {
        width: 100px !important;
        border: 6px solid ${props => props.theme.colors.background} !important;
      }
    }
  }

  display: flex;
  flex-direction: column;

  div.image-border {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 150px;
      border-radius: 50%;
      border: 6px solid ${props => props.theme.colors.background};
    }
  }

  strong {
    display: flex;
    align-self: center;
    font-size: 2.4rem;
    margin: 30px 0 10px;
    text-transform: capitalize;
    font-weight: normal;
  }

  div.social-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      font-size: 2.4rem;
    }
  }
`;

export const Skills = styled.section`
  display: grid;
  grid-template-columns: repeat(5, minmax(80px, 1fr));
  align-self: stretch;
  grid-gap: 40px;

  @media (max-width: 615px) {
    grid-template-columns: repeat(4, minmax(80px, 1fr));
  }

  @media (max-width: 490px) {
    grid-template-columns: repeat(3, minmax(80px, 1fr));
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(2, minmax(80px, 1fr));
  }
`;

export const Jobs = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  align-self: stretch;
`;

export const Contact = styled.section`
  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  align-self: stretch;
  margin-bottom: 100px;

  div {
    display: flex;
    align-items: center;

    a {
      margin-left: 10px;
      font-size: 1.4rem;
      color: ${props => props.theme.colors.text};
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${props => props.theme.colors.secondary};
      }
    }

    span {
      margin-left: 10px;
      font-size: 1.4rem;
      color: ${props => props.theme.colors.text};
    }
  }
`;
