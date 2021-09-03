import React from 'react'
import UserName from './UserName'

class MessageInput extends React.Component {
    state = {
        bodyTxt: '',
        userNametxt: ''

    }

    render() {
        const {bodyTxt, userNameTxt} = this.state
        const {addMessage} = this.props

        const handleChgName = (e) => {
            this.setState({userNameTxt: e.target.value})
        }
        const handleChgBody = (e) => {
            this.setState({bodyTxt: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            addMessage({messageBody: bodyTxt, userName: userNameTxt})
            this.setState({bodyTxt: '', userNameTxt: ""})
        }

        return (
            <form onSubmit={handleSubmit}>
            
                <p>Name</p>
                <input type='text'
                className="PopText"
                placeholder='Username'
                name='text'
                value={userNameTxt}
                onChange={handleChgName}
                />
            

                <p>Text</p>
                <input type='text'
                className="PopText"
                placeholder="Message Post"
                name='text'
                value={bodyTxt}
                onChange={handleChgBody}
                />
                
                <div>
                <input type="submit" className="btn"/>
                </div>
            </form>
        )
    }
}

export default MessageInput
