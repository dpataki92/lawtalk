import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users.js';
import currentUserReducer from './reducers/currentUser.js';
import loginFormReducer from './reducers/loginForm.js';
import questionsReducer from './reducers/questions.js';
import currentProfileReducer from './reducers/currentProfile.js';
import currentQuestionReducer from './reducers/currentQuestion.js';
import currentAnswersReducer from './reducers/currentAnswers.js';
import currentCommentsReducer from './reducers/currentComments.js';
import signupFormReducer from './reducers/signupForm.js';


const reducer = combineReducers({
    currentUser: currentUserReducer,
    loginForm: loginFormReducer,
    questions: questionsReducer,
    topUsers: usersReducer,
    currentProfile: currentProfileReducer,
    currentQuestion: currentQuestionReducer,
    currentAnswers: currentAnswersReducer,
    currentComments: currentCommentsReducer,
    signupForm: signupFormReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
