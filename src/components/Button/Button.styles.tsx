import styled from 'styled-components';

import { SpinnerContainer } from '../Spinner/Spinner.styles';

export const BaseButton = styled.button`
  min-width: 25px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 1.5rem;
  background-color: #1b244f;
  font-size: 1.2rem;
  color: white;
  border: 1px solid #1b244f;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  &:hover {
    transition: all 0.5s;
    background-color: white;
    color: #1b244f;

    svg {
      stroke: #1b244f;
    }
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #1b244f;
  border: 1px solid #1b244f;

  &:hover {
    background-color: #1b244f;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;