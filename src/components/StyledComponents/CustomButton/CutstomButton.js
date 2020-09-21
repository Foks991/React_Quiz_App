import styled from 'styled-components'

export const StyledButton = styled.button`
  text-align: center;
  width: 200px;
  padding: 10px;
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;
  background-color: ${props => (props.lightgreen ? '#20c00a' : 'darkgrey')};
  color: white;
  margin: 0 50px 20px;
  outline: none;
  border: none;
  &:hover{
    color: white;
    box-shadow: none;
    transition: all 300ms ease;
  }
  &:before {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    background: rgba(255,255,255,0.3);
    top: 0;
    left: 50%;
    transition: all 0ms ease;
  }
  &:hover:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.3);
    top: 0;
    left: 0;
    transition: all 300ms ease;
  }
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;
