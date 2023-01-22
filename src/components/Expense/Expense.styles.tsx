import styled from 'styled-components';

import { GlobalStyles } from '../../styles/global';

export const ExpenseBlock = styled.div`
  border: 2px solid #FFF;
  padding: 1rem 2rem;
  border-radius: 6px;
  color: #FFF;
  display: flex;
  justify-content: space-between;
`;

export const ExpenseInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ExpenseHeading = styled.h3`
  color: ${GlobalStyles.colors.accent500};
`

export const BtnContainer = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const AddExpenseModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`