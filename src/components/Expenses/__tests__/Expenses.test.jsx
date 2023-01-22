import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';

import { Expenses } from '../Expenses';
import { expenses } from '../../../mockData';

describe('Expenses component', () => {
  it('Should be in the document', () => {
    render(<Expenses expenses={[]} />);
    const expensesEl = screen.getByTestId('expenses');
    expect(expensesEl).toBeInTheDocument();
    const { queryAllByTestId } = within(expensesEl);
    const expenseItem = queryAllByTestId('expense');
    expect(expenseItem).toHaveLength(0);
  });

  it('Should render array of expenses when it is passed via props', () => {
    render(<Expenses expenses={expenses} />);
    const expensesEl = screen.getByTestId('expenses');
    const { queryAllByTestId } = within(expensesEl);
    const expenseItem = queryAllByTestId('expense');
    expect(expenseItem.length).toBe(6)
  })
})