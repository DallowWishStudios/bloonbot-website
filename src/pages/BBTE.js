import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/BBTE.scss'
import bot from '../other/bot'
import Interface from '../Components/bbte/Interface'
import DialogueBox from '../Components/functional/DialogueBox'

export default class BBTE extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            msgs: [],
            myMsg: null,
            strangerMsg: null,
            confirmDisconnect: false,
            isStrangerDisconnecting: false,
            isStrangerTyping: false,
            didStrangerDisconnect: false
        }
        this.endOfChat = React.createRef()
        this.chat = React.createRef()
    }

    componentDidMount(){
        bot()
    }

    componentWillUnmount(){
        document.querySelector('#botPanel').remove()
    }

    sendMsg(msg, isMine){
        if(this.state.didStrangerDisconnect) return

        const { msgs } = this.state

        this.setState({
            ...this.state,
            msgs: msgs.concat({msg, isMine}),
            isStrangerTyping: false
        }, this.scrollToChatBottom)
    }

    scrollToChatBottom(){
        const elChat = this.chat.current
        elChat.scrollTop = elChat.scrollHeight
    }

    toggleDisconnectBox(isMine){
        const isDisconnectBoxOpen = this.state.confirmDisconnect
        const didStrangerDisconnect = this.state.didStrangerDisconnect

        if(didStrangerDisconnect)
            return this.disconnect()
            
        this.setState({
            ...this.state,
            confirmDisconnect: !isDisconnectBoxOpen && !didStrangerDisconnect,
            isStrangerDisconnecting: !isDisconnectBoxOpen && !isMine,
            didStrangerDisconnect: false,
        })
    }

    disconnect(){
        const { isStrangerDisconnecting, didStrangerDisconnect, msgs } = this.state
        console.log ({isStrangerDisconnecting, didStrangerDisconnect});

        this.setState({
            ...this.state,
            msgs: !isStrangerDisconnecting ? [] : msgs,
            confirmDisconnect: false,
            isStrangerTyping: false,
            didStrangerDisconnect: isStrangerDisconnecting,
            isStrangerDisconnecting: false
        }, () => this.scrollToChatBottom())
    }

    setTypingIndicator(isTyping){
        this.setState({
            ...this.state,
            isStrangerTyping: isTyping
        }, this.scrollToChatBottom)
    }

    placeMsgs(){
        const { msgs } = this.state

        return msgs.map((message, index) => {
            const {msg, isMine} = message

            return (
                <div className={isMine ? 'my' : 'str'} key={index}>
                    <span className='ownerLabel'>{isMine ? 'You: ' : 'Someone: '} </span>
                    <span className="msg">{msg}</span>
                </div>
            )
        })
    }

    render(){
        return (
            <div className='BBTE'>
                <div className="container">
                    <DialogueBox onConfirm={ this.disconnect.bind(this) } onCancel={ this.toggleDisconnectBox.bind(this) } show={ this.state.confirmDisconnect } />
                    <p><Link className='back' to='/'> <svg className='backArrow' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg> Back to BloonBot main page</Link></p>

                    <h1>BloonBot Testing Environment</h1>
                    
                    <div className="chat i3" ref={this.chat}>
                        <div className='info'>Your view of chat</div>
                        {( ()=>{
                            const { msgs } = this.state
                            if(!msgs.length && !this.state.didStrangerDisconnect) return (
                                <span className='i3'>
                                    Say hi to yourself! <span role='img'>🙃</span>
                                </span>
                            )
                        } )()}
                        <div className="log">
                            { this.placeMsgs() }
                        </div>
                        <div className="endOfChat i3" ref={this.endOfChat}>
                            { this.state.isStrangerTyping ? 'Someone is now typing...' : null }
                            {
                                this.state.didStrangerDisconnect ? (
                                    <span className='i3'>
                                        Someone disconnected
                                        <button className='disconnect btn' onClick={ this.disconnect.bind(this) }>Start a new chat</button>
                                    </span>
                                ) : null
                            }
                        </div>
                    </div>

                    <Interface isDisabled={ this.state.didStrangerDisconnect } isMine={true} onSend={this.sendMsg.bind(this)} onDisconnect={ this.toggleDisconnectBox.bind(this) }/>
                    <Interface isDisabled={ this.state.didStrangerDisconnect } isMine={false} onSend={this.sendMsg.bind(this)} onDisconnect={ this.toggleDisconnectBox.bind(this) } onType={ this.setTypingIndicator.bind(this) } />
                </div>
            </div>
        )
    }
}
