
import React from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';

import MessageInput from './components/MessageInput';
import SingleMessage from './components/SingleMessage';
import Loading from './components/Loading';
import Messages from './components/Messages';


class App extends React.Component {

  state = {
    messages: [],
    singleMessage: null,
    loading: false
  }

  render() {
    const {messages, loading, singleMessage}= this.state

    const addMessage = (obj) => {
      console.log(obj)
      const id = uuidv4()
      obj.id =id
      this.setState({messages: [...messages, obj ]})
    }

    const deleteMessage = (id) => {
      this.setState({messages: messages.filter(message => message.id !== id)})
    }

    const selectSingleMessage = (message) => {
      this.setState({singleMessage: message})
    }

    const clearSingleMessage = () => {
      this.setState({singleMessage: null})
    }

    const editMessage = (obj) => {
      const updatedMessages = messages.map(message => {
        if(obj.id === message.id) {
          message.messageBody =obj.messageBody
        }
        return message
      })
      this.setState({messages: updatedMessages})
      this.setState({singleMessage: null})
    }

    if(singleMessage) {
      console.log(singleMessage)
      return (
      <div className="container"> 
        <SingleMessage 
        singleMessage={singleMessage} 
        clearSingleMessage={clearSingleMessage}
        editMessage={editMessage}
        
          />
        </div>
      )
    } else if(loading) {
      return <Loading />
    } else {
      return (
        <div className="container">
          <h1>My messaging system.</h1>
          <MessageInput addMessage={addMessage}/>
          <Messages
          messages={messages}
          deleteMessage={deleteMessage}
          selectSingleMessage={selectSingleMessage}
          />
        </div>
        )
  }
}
}
  

export default App;


// {/* create functionality for following:

//       - Ability to create new messages
//       - Ability to click on a single message and view it with conditional rendering
//       - Ability to edit single message
//       - Ability to delete single message

//       -- By default, the user should see the input field for creating a new message. Under the input field, all messages that have been created should appear. 

//       -- Techniques used: conditional rendering, controlled components, passing state as props

//       -- Each message should have a messageBody, a userName, and a unique ID.

//       -- Packages to use: axios, uuid (for creating unique id for each message).
//       */}