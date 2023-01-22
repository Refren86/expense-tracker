import styled from 'styled-components';

import { GlobalStyles } from '../../styles/global';

export const DropdownHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  column-gap: 6px;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  align-items: center;
  border-bottom: 1px solid ${GlobalStyles.colors.gray500};
  background: #ffffff;
  color: ${GlobalStyles.colors.gray500};
  cursor: pointer;
`;