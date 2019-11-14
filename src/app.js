import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import visibleExpenses from "./selectors/expenses";
import { setTextFilter } from "./actions/filters";

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visiblesExpenses = visibleExpenses(state.expenses, state.filters);
  console.log(visiblesExpenses);
});

// add expenses
store.dispatch(addExpense({ description: "Water Bill" }));
store.dispatch(addExpense({ description: "Gaz Bill" }));
store.dispatch(setTextFilter("gaz"));

setTimeout(() => {
  store.dispatch(setTextFilter("bill"));
}, 3000);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
