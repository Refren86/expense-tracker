import { memo } from 'react';

import { Button } from '../Button';
import { TExpense } from '../../types';
import { getFormattedDate } from '../../helpers';

import { ReactComponent as EditIcon } from '../../assets/svgs/Edit.svg';
import {
  BtnContainer,
  ExpenseBlock,
  ExpenseHeading,
  ExpenseInfo,
} from './Expense.styles';

type ExpenseProps = {
  expense: TExpense;
  openAddExpenseModal: () => void;
};

export const Expense = memo(({ expense, openAddExpenseModal }: ExpenseProps) => {
  const { amount, currency, date, description } = expense;

  return (
    <ExpenseBlock data-testid="expense">
      <ExpenseInfo>
        <ExpenseHeading>
          {amount} {currency} - {description}
        </ExpenseHeading>

        <p>{getFormattedDate(date)}</p>
      </ExpenseInfo>

      <BtnContainer>
        <Button onClick={openAddExpenseModal}>
          <EditIcon style={{ width: '18px', height: '18px', color: 'white' }} />
        </Button>

        <Button>
          <span style={{ fontSize: '1.8rem' }}>&#215;</span>
        </Button>
      </BtnContainer>
    </ExpenseBlock>
  );
});
