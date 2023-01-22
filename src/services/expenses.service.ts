import { TExpense } from '../types';
import { endpoints } from '../helpers';
import { AxiosRes, axiosService } from './axios.service';

export const expensesService = {
  getAll: (): AxiosRes<Record<string, TExpense>> =>
    axiosService.get(endpoints.expenses).then((response) => response as any),
  storeExpense: (expenseData: TExpense) =>
    axiosService
      .post(endpoints.expenses, expenseData)
      .then((response) => response),
  updateExpense: (id: string, expenseData: TExpense) =>
    axiosService
      .put(endpoints.expensesWithId(id), expenseData)
      .then((response) => response),
  deleteExpense: (id: string) =>
    axiosService
      .delete(endpoints.expensesWithId(id))
      .then((response) => response),
};
