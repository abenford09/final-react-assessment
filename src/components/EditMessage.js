import React, { Fragment } from 'react'

class EditMessage extends React.Component {
    state = {
        bodyTxt: ''
    }

    render() {
        const{bodyTxt} = this.state
        const{singleMesage, editMessage} = this.props

        const handleChg = (e) => {
            this.setState({text: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const updatedMessage = {
                messageBody: bodyTxt,
                id: e.target.id
            }
            editMessage(updatedMessage)
        }

        return (
            <Fragment>
                <h1>Edit Message</h1>
                <form onSubmit={handleSubmit} id={singleMesage.id}>
                    <input className='' type="text" value={bodyTxt} onChange={handleChg}/>
                    <input type="submit" className="btn hover"/>
                </form>
            </Fragment>
        )
    }
}

export default EditMessage