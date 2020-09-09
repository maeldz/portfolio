import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: ${props => props.theme.colors.footer};
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  height: 80px;
  align-self: stretch;
  color: ${props => props.theme.colors.text};
  font-size: 1.4rem;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
    margin-left: 5px;
  }
`;
