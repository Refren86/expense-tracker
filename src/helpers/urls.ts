const baseURL = 'https://rn-expenses-3ae18-default-rtdb.europe-west1.firebasedatabase.app';

const endpoints = {
  expenses: '/expenses.json',
  expensesWithId: (id: string) => `/expenses/${id}.json`
}

export {
  baseURL,
  endpoints,
}