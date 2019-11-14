// Expenses reducer

// Filters reducer

//get visibles expenses

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visiblesExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visiblesExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: -11000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter("ee"));
// store.dispatch(setTextFilter(""));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//store.dispatch(removeExpense({}));

// store.dispatch(setStartDate(2900));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [
    {
      id: "sokjsij",
      description: "January rent",
      note: "This was the final payement for that adress",
      amount: 545000,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
