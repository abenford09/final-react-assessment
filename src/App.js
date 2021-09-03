import logo from './logo.svg';
import React from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';


class App extends React.Component {

  state = {
    messages: [],
    singleMessage: null,
    Loading: false
  }
  
  return (
    <div className="App">
      <h1>My messaging system.</h1>
      {/* create functionality for following:

      - Ability to create new messages
      - Ability to click on a single message and view it with conditional rendering
      - Ability to edit single message
      - Ability to delete single message

      -- By default, the user should see the input field for creating a new message. Under the input field, all messages that have been created should appear. 

      -- Techniques used: conditional rendering, controlled components, passing state as props

      -- Each message should have a messageBody, a userName, and a unique ID.

      -- Packages to use: axios, uuid (for creating unique id for each message).
      */}
    </div>
  );
}

export default App;
