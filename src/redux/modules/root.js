import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { authEpic, checkAuthEpic } from './auth/epic';
import { connectRouter } from 'connected-react-router';
import authReducer from './auth/reducer';
import loadingReducer from './loading/reducer'


export const rootEpic = combineEpics(
    authEpic,
    checkAuthEpic,
);

export const rootReducer = combineReducers({
    authReducer,
    loadingReducer
})

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    authReducer,
    loadingReducer
})