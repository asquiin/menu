// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'; 


// ReactDOM.render(
//     <div> 
//     <App />
//     </div>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
const store = createStore(
    allReducers

);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

