import styled, { css } from 'styled-components';

import { GlobalStyles } from '../../styles/global';

// for blocks of styles (like mixin)
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: #FFF;
`;

type FormInputLabelProps = {
  shrink?: boolean;
};

// adding type for shrink
export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${GlobalStyles.colors.gray500};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  
  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${GlobalStyles.colors.gray500};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${GlobalStyles.colors.gray500};

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 1.5rem 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
