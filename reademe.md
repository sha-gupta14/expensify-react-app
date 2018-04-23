# Git Commands

git init - Create a new git repository
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits

#Express Server

It is use for production
Need to create bundle.js to use as local server

#Development & Production dependencies
npm add chalk --dev - Create new dependencies for development
npm install --production - Create node_module based on dependencies for production

npm run build:prod


#Heroku

heroku login - for login
heroku create <app name> - create as app
git push heroku master - deploy
heroku open - launch app


#Babel

babel-core: allow babel to run with webpack
babel-loader: teach babel how to run webpack
babel-polyfill: allow to run on all type of browsers

#Testing

store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
var one = store.dispatch(addExpense({description: 'Coffee', amount: 500, createdAt: 200}));

store.dispatch(editExpense(one.expense.id, {amount: 50}));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(state);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});
store.dispatch(setStartDate(125)); // startDate 125
store.dispatch(setStartDate()); // startDate undefined
store.dispatch(setEndDate(1250)); // endDate 1250
