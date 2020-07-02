import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppConsumer } from './context/appContext'

const App = () => {
  // const appContext = useContext(AppContext)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <AppConsumer>
            {
              ({ isClick }) => <div>{`${isClick}`} <code>src/App.js</code> and save to reload.</div>
            }
          </AppConsumer>
        </p>
        <AppConsumer>
          {
            ({ onClick }) => (
              <a
                className="App-link"
                onClick={() => onClick()}
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            )
          }
        </AppConsumer>
      </header>
    </div>
  );
}

export default App;
