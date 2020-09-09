import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 0 80px;
  position: relative;

  div.outside {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 13px;
    height: 13px;
    background: ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: 1px;

    div.inside {
      width: 9px;
      height: 9px;
      background: ${props => props.theme.colors.secondary};
      border: 2px solid ${props => props.theme.colors.background};
    }
  }

  strong {
    margin-left: 10px;
    font-size: 2.2rem;
    line-height: 3.2rem;
    text-transform: capitalize;
  }
`;
