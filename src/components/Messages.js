import React from 'react'
import MessageItem from './MessageItem'

class Messages extends React.Component {
    render() {

        const {messages, userName, deleteMessage, selectSingleMessage} = this.props

        return (
            <div className='container'>
                {messages.map(message => (
                    <MessageItem 
                    message={message}
                    key={message.id}
                    userName={userName}
                    deleteMessage={deleteMessage}
                    selectSingleMessage={selectSingleMessage}
                    />
                ))}
                
            </div>
        )
    }
}

export default Messages