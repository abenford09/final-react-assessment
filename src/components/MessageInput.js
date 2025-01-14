import React from 'react'

class MessageInput extends React.Component {
    state = {
        bodyTxt: '',
        userNameTxt: ''

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
            this.setState({bodyTxt: '', userNameTxt: ''})
        }

        return (
            <form onSubmit={handleSubmit}>
            
                {/* <p>Name</p> */}
                <input type='text'
                className="PopText"
                placeholder='Username'
                value={userNameTxt}
                onChange={handleChgName}
                />
            

                {/* <p>Text</p> */}
                <input type='text'
                className="PopText"
                placeholder="Message Post"
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
