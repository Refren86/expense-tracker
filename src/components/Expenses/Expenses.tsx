import { useCallback, useState } from 'react';

import { TExpense } from '../../types';
import { Expense } from '../../components';

import { ExpensesWrapper } from './Expenses.styles';
import { AddExpenseModal } from './AddExpenseModal/AddExpenseModal';

type TExpensesProps = {
  expenses: TExpense[];
};

export const Expenses = ({ expenses }: TExpensesProps) => {
  const [isAddingExpense, setAddingExpense] = useState(false);

  const toggleAddExpenseModal = useCallback(() => {
    setAddingExpense((prev) => !prev);
  }, []);

  return (
    <ExpensesWrapper data-testid="expenses">
      {expenses?.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          openAddExpenseModal={toggleAddExpenseModal}
        />
      ))}

      <AddExpenseModal
        isOpened={isAddingExpense}
        onClose={toggleAddExpenseModal}
      />
    </ExpensesWrapper>
  );
};
