import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer, createRootReducer } from './modules/root'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';

const epicMiddleware = createEpicMiddleware();

export const history = createBrowserHistory();

export default function configurateStore() {
    const store = createStore(
        createRootReducer(history),
        compose(
            applyMiddleware(
                epicMiddleware,
                routerMiddleware(history),
            )
        )
    );

    epicMiddleware.run(rootEpic);

    return store;
}