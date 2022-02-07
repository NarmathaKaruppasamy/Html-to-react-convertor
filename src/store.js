import { createStore ,applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk'; 

export default function configureTool(initialState, rootReducer){
    const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware=applyMiddleware(thunk);
    return createStore(
        rootReducer,
        initialState,
        composeEnhancer(middleware)
    );
}