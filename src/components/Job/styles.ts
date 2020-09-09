import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  position: relative;
  margin-bottom: 20px;
  padding: 15px;
  background: ${props => props.theme.colors.primary};
  border-radius: 6px;
  min-height: 35vh;

  &::after {
    content: '';
    position: absolute;
    border-radius: 6px;
    width: 90%;
    height: 80px;
    top: -10px;
    z-index: -1;
    background: ${props => props.theme.colors.secondary};
    box-shadow: 0px 0px 3px ${props => props.theme.colors.secondary};
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-self: stretch;

    span {
      font-size: 1.4rem;
      font-weight: bold;
    }

    p {
      margin-top: 10px;
      font-size: 1.3rem;
      line-height: 1.8rem;
      color: ${props => props.theme.colors.text};
    }
  }

  a {
    display: none;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.secondary};
    font-size: 1.2rem;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    padding: 12px;
    align-self: stretch;
    text-align: center;
    text-decoration: none;
    transition: opacity 0.4s;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &:hover {
    justify-content: space-between;
    align-items: center;

    > div {
      align-items: center;

      p {
        text-align: center;
        margin-bottom: 10px;
      }
    }

    img {
      display: none;
    }

    a {
      display: block;
    }

    div.tags {
      display: flex;
    }
  }
`;

export const Tags = styled.div`
  display: none;
  flex-wrap: wrap;
  align-self: stretch;
  justify-content: center;
  margin-top: 10px;

  div {
    margin: 0 10px 10px 0;
    display: flex;
    font-size: 0.9rem;
    padding: 5px;
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
    text-transform: uppercase;
    border: 2px solid ${props => props.theme.colors.secondary};
    box-shadow: 0px 0px 3px ${props => props.theme.colors.secondary};
    text-shadow: 0px 0px 3px ${props => props.theme.colors.secondary};
    border-radius: 12px;
  }
`;
