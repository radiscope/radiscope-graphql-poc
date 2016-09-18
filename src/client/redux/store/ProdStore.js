import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from '../reducers/Reducers';
import thunk from 'redux-thunk';

class ProdStore {
    static configureStore(initialState = {}) {
        // Middleware and store enhancers
        const enhancers = [
            applyMiddleware(thunk)
        ];

        return createStore(Reducers.getRootReducer(), initialState, compose(...enhancers));
    }
}

export default ProdStore;