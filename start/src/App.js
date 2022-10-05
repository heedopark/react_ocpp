import React from 'react';
import { Button, AppBar, Tabs, Tab } from '@material-ui/core';
import { Home, Send, Person } from "@material-ui/icons"
import logo from './logo.svg';
import './App.css';

const TopHeader = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
          <Tab label="Home" icon={<Home/>} />
          <Tab label="Send" icon={<Send/>} /> 
          <Tab label="Profile" icon={<Person />} />
        </Tabs>
      </AppBar>
    </>
  );
}

function App() {
  return (
    TopHeader()
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Button variant="contained" color="primary">Hello World</Button>
        </a>
      </header>
    </div>
    */
  );
}

export default App;
