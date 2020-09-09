import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
  level: number;
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  small {
    margin-bottom: 15px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.text};
  }

  img {
    width: 50px;
  }
`;

export const LevelBar = styled.div<Props>`
  position: relative;
  margin-top: 10px;
  background: ${props => props.theme.colors.levelBar};
  height: 5px;
  width: 50%;
  min-width: 50px;
  max-width: 120px;
  border-radius: 3.5px;

  &::after {
    content: '';
    position: absolute;
    background: ${props => props.color};
    height: 5px;
    border-radius: 3.5px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: ${props => props.level}%;
    box-shadow: 0px 0px 3px ${props => props.color};
  }
`;
