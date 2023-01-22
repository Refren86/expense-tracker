import styled from 'styled-components';

import { GlobalStyles } from '../../../styles/global';

export const DropdownItems = styled.div`
  position: absolute;
  z-index: 10;
  top: 46px;
  background: #ffffff;
  outline: 1px solid ${GlobalStyles.colors.gray500};
  color: ${GlobalStyles.colors.gray500};
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
`;