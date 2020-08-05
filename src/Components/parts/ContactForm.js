import React, { useState } from 'react'
import '../../styles/components/ContactForm.scss'

function ContactForm(props){
    let btnTimeout = null

    const btnStates = {
        WAIT: {
            text: 'Sending message...',
            class: 'wait'
        },
        DEFAULT: {
            text: 'Send message',
            class: 'default'
        },
        SUCCESS: {
            text: '✔️ Message sent',
            msg: 'We appreaciate your feedback 🤓',
            class: 'success'
        },
        ERROR: {
            text: '❌ Error',
            msg: 'Couldn\'t send the message 😞 you can try to send the message directly to our mail',
            class: 'error'
        }
    }

    const [state, setState] = useState({
        mail: '',
        subject: '',
        msg: '',
        btn: btnStates.DEFAULT
    })

    const setBtnState = (btnState) => {
        setState({
            ...state,
            btn: btnState
        })

        if(btnTimeout) clearTimeout(btnTimeout)

        btnTimeout = setTimeout(() => {
            if(btnState === btnStates.ERROR || btnState === btnStates.SUCCESS){
                setBtnState(btnStates.DEFAULT)
            }
        }, 10000);
    }

    const sendMail = () => {
        const {mail, subject, msg} = state
        
        setBtnState(btnStates.WAIT)

        fetch('https://bloonbot.herokuapp.com/mail', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                mail,
                subject,
                msg
            })
        })
        .then(res => {
            if(!res.ok){
                setBtnState(btnStates.ERROR)
                return
            }
            
            setBtnState(btnStates.SUCCESS)
        })
        .catch(err => {
            setBtnState(btnStates.ERROR)
        });
    }

    const handleChange = e => {
        const target = e.target
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(e.target.checkValidity()){
            sendMail()
        }
    }

    return (
        <section className='contact'>
            <header>
                <h1>Contact us</h1>
            </header>
            <div className="contactContent">
                <form action="" onSubmit={ handleSubmit }>
                    <div className="inputBox">
                        <label htmlFor="mail">Mail<span className="i4"> - required</span></label>
                        <input type="email" id='mail' name='mail' required onChange={ handleChange } />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id='subject' name='subject' onChange={ handleChange } />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="message">Message<span className="i4"> - required</span></label>
                        <textarea id='msg' name='msg' required onChange={ handleChange } />
                    </div>
                    
                    <button className={'btn ' + state.btn.class} type='submit'>{ state.btn.text }</button>
                    <span className="reply">{state.btn.msg}</span>
                </form>

                <div className="container">
                    <div className='contactAside'>
                        <svg className='icon' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/></svg>
                        <div className="mail content">
                            Our mail <a href="mailto:dallowwishstudios@gmail.com">dallowwishstudios@gmail.com</a>
                        </div>
                    </div>
                    <div className='contactAside'>
                        <svg className='icon' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                        <div className='content'>If you like BloonBot, consider supporting us on <a href="https://www.patreon.com/dallowwish" target='blank'>Patreon</a> or through PayPal to our mail. We are adding at least one feature for every donate we get!</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm