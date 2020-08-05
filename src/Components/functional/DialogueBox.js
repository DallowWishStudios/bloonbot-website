import React from 'react'
import '../../styles/components/DialogueBox.scss'

export default function DialogueBox(props) {
    const { onConfirm, onCancel, show } = props

    const inConfirm = () => {
        if(onConfirm) onConfirm()
    }

    const inCancel = () => {
        if(onCancel) onCancel()
    }

    if(show){
        return (
            <div className='Dialogue'>
                <div className="overlay"></div>
                <div className="dialogueBox">
                    <div className="title">Confirm disconnecting</div>
                    <div className="content">Are you sure you want to disconnect? This will clear all messages and start a new chat.</div>
                    <div className="btns">
                        <button className="btn ok" onClick={ inConfirm }>Disconnect</button>
                        <button className="btn cancel" onClick={ inCancel }>Cancel</button>
                    </div>
                </div>
            </div>
        )
    } else return null
}
