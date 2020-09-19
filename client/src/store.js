import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users.js';
import currentUserReducer from './reducers/currentUser.js';
import loginFormReducer from './reducers/loginForm.js';
import questionsReducer from './reducers/questions.js';

const reducer = combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer,
    loginForm: loginFormReducer,
    questions: questionsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
