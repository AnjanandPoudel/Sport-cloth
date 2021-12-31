import './styles/App.css';
import './styles/appsmall.css'
import './styles/index.css'
import './styles/social.css'

import React from 'react';
import Main from './components/mainComponent';
import { Context, wholestate } from './contextapi/context';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Context.Provider value={wholestate} >
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Context.Provider>
    </div>
  );
}

export default App;
