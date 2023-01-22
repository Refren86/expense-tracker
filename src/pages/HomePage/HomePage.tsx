import { useEffect } from 'react';

import { Expenses, Title } from '../../components';
import { getExpenses } from '../../store/slices/expensesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

type HomePageProps = {};

export const HomePage = ({}: HomePageProps) => {
  const { expenses } = useAppSelector(({ expenses }) => expenses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getExpenses());
  }, []);

  return (
    <div>
      <Title text="Expenses" />

      <Expenses expenses={expenses} />
    </div>
  );
};
