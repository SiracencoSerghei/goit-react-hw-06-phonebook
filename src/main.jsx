import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { contactsStore } from './components/redux/contacts/contactStore';
import { filterStore } from './components/redux/filter/filterStore';
import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={contactsStore}>
    <Provider store={filterStore}>
      <App />
    </Provider>
  </Provider>
);
