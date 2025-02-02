import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import reducers from './reducers';
import App from './App.jsx'

// 3) How do you pass the redux store to the react js page ?

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), 
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

// 4) What would be the prompt you would write if you had to display the above table in react js in the form of a mindmap.
  //"Create a mindmap visualization of JSONPlaceholder posts, where each post is represented as a node. The root node is labeled 'Posts,' and it branches into individual posts (limited to 10). Each post node should display the ID and title. Use a hierarchical structure to organize the nodes clearly."
