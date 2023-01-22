import { createAsyncThunk, createSlice, AnyAction } from '@reduxjs/toolkit';

import { TExpense } from '../../types';
import { expensesService } from '../../services/expenses.service';

type TExpensesState = {
  expenses: TExpense[];
  error: null | string;
  loading: boolean;
};

const isFetching = (action: AnyAction) => {
  return action.type.endsWith('pending');
};

const isError = (action: AnyAction) => {
  return action.type.endsWith('rejected');
};

const initialState: TExpensesState = {
  expenses: [],
  error: null,
  loading: false,
};

export const getExpenses = createAsyncThunk<
  TExpense[],
  void,
  { rejectValue: string }
>('expenses/getExpenses', async (_, { rejectWithValue }) => {
  try {
    // -NDw-2Ws5mKJmYnQszHC: {amount: 12.99, date: 1665187200000, description: 'Fine beer'}
    const { data } = await expensesService.getAll();

    const expensesArr: TExpense[] = [];

    for (const key in data) {
      const expenseObj = {
        id: key,
        amount: data[key].amount,
        date: data[key].date,
        description: data[key].description,
        currency: data[key].currency,
      };

      expensesArr.push(expenseObj);
    }

    const orderedExpenses = expensesArr.sort((a, b) => b.date - a.date);

    return orderedExpenses;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const addExpense = createAsyncThunk<TExpense, TExpense, { rejectValue: string }>(
  'expenses/addExpense',
  async (expenseData, { rejectWithValue }) => {
    try {
      const response = await expensesService.storeExpense(expenseData);

      const newExpense = {
        ...expenseData,
        id: response.data.name,
      };

      return newExpense;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses = action.payload;
      })

      .addCase(addExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses.unshift(action.payload);
      })

      .addMatcher(isFetching, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addMatcher(isError, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

const expensesReducer = expensesSlice.reducer;

export default expensesReducer;
