import {createStore} from 'redux';
import { TokensReducer } from './tokens/TokensReducer';

const store = createStore(TokensReducer);

export default store;