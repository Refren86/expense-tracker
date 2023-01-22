export type TCurrency = 'UAH' | 'EUR' | 'USD'; 

export type TExpense = {
  id?: string;
  date: number; // 2023-01-21
  amount: number;
  currency: TCurrency;
  description: string;
};