import React, { Fragment } from 'react'
import EditMessage from "./EditMessage"

class SingleMessage extends React.Component {
    state = {
        edit: false
    }

    render() {
        const {edit} = this.state
        const {singleMessage, clearSingleMessage, editMessage} = this.props

        const handleClear = () => {
            clearSingleMessage()
        }

        const handleEdit = () => {
            this.setState({edit: true})
        }


        return (
            <Fragment>
                <h1>Single Message</h1>
                <h1>{singleMessage.messageBody}</h1>
                <p>{singleMessage.id}</p>
                <p>{singleMessage.userName}</p>
                <button className='btn' onClick={handleClear}>Back</button>
                <button className='btn' onClick={handleEdit}>Edit</button>
                {edit && <EditMessage singleMessage={singleMessage} editMessage={editMessage} />}
                
            </Fragment>
        )
    }
}

export default SingleMessage
