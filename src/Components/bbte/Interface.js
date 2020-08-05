import React, { Component } from 'react'

export default class Interface extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg: null
        }
        this.msgBox = React.createRef()
        this.isMine = this.props.isMine
        this.timerIsTyping = null
    }

    handleSubmit(e){
        e.preventDefault()
    }

    handleKeyDown(e){
        if(e.key === 'Enter'){
            e.preventDefault()
            this.sendMsg()
        }
    }

    handleClick(e){
        const target = e.target

        if(target.classList.contains('send')){
            this.sendMsg()
            this.msgBox.current.focus()
        } else if (target.classList.contains('disconnect')){
            this.props.onDisconnect(this.isMine)
        }
    }

    clearMsgBox(){
        this.msgBox.current.value = ''
        this.setState({...this.state, msg: null})
    }

    handleChange(e){
        const { onType } = this.props
        
        if(onType){
            if(this.timerIsTyping){
                clearTimeout(this.timerIsTyping)
            }
            
            onType(true)
            this.timerIsTyping = setTimeout(() => {
                onType(false)
            }, 1000);
        }

        this.setState({
            ...this.state,
            msg: e.target.value
        })
    }

    sendMsg(){
        const { onSend } = this.props

        const noTrimMsg = this.state.msg; if(!noTrimMsg) return
        const msg = noTrimMsg.trim(); if(!msg) return
        
        this.clearMsgBox()
        onSend(msg, this.isMine)
    }

    render() {
        return (
            <div className={`interfaceBox ${this.isMine ? 'me' : ('stranger' + (this.props.isDisabled ? ' disabled' : ''))} `}>
                <h2>{ this.isMine ? 'Your interface' : 'Someone\'s interface' }</h2>
                <div className="inputBox">
                    <form className="interface" onSubmit={ this.handleSubmit }>
                        <textarea 
                            className={`msgInput ${(this.props.isDisabled)? "disabled" : ""}`}
                            name='msg' type="text" 
                            placeholder={this.isMine ? 'Here enter your messages' : 'Here enter messages that other chatters would send'} 
                            onChange={ this.handleChange.bind(this) }
                            onKeyDown={ this.handleKeyDown.bind(this) }
                            ref={ this.msgBox }
                        ></textarea>
                        
                        <button className="disconnect btn" onClick={ this.handleClick.bind(this) }>Disconnect</button>
                
                        <button type='submit' className={`send btn ${(this.props.isDisabled)? "disabled" : ""}`} onClick={ this.handleClick.bind(this) }>Send message</button>
                    </form>
                </div>
            </div>
        )
    }
}
