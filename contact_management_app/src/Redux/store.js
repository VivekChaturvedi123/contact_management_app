// store.js
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
/*The code sets up the Redux store using the createStore function and the reducer. store that will manage the state of the application and exports it for other parts of the application to use.*/