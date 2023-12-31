import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { adminReducer, cartReducer, productsReducer, userReducer } from './reducers';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  adminData: adminReducer
})


export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)));