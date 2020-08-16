import React from 'react'
import '../styles/components/_Guide.scss'
import guide from '../img/tutorial/guide.png'
import queue from '../img/tutorial/queue.png'
import condits from '../img/tutorial/condits.png'
import options from '../img/tutorial/options.png'
import login from '../img/tutorial/login.png'
import upload from '../img/tutorial/upload.png'
import uploadBtn from '../img/tutorial/upload-btn.png'
import loginBtn from '../img/tutorial/login-btn.png'
import browse from '../img/tutorial/browse.png'
import browseBtn from '../img/tutorial/browse-btn.png'
import guideBG from '../img/tutorial/guideBG.jpg'

export default function Guide() {
    return (<>
        <section className="mainPage QuickGuide" id='quickGuide'>
            <a href={guideBG}>
                <div className="text i3">Click to zoom 🔍</div>
                <img src={guide} alt="default"/>
            </a>
        </section>
        <section className='mainPage GuidePage' id='guide'>
            <div className="guide">
                <header>
                    <h2>Guide</h2>
                </header>
                <p>
                    Bot's most important parts are queue and conditionals. Let's get right into them.
                </p>
                <div className="queue guidePart" id='queue'>
                    <div className="text">
                        <h3>Queue</h3>
                        <p>
                            Messages in queue are sent from top to bottom. You can easily remove, move, or edit any message. New messages are added on the bottom of queue.
                            To manipulate queue behaviour check options below the queue.
                        </p>
                    </div>
                    <div className="illustration">
                        <img src={queue} alt=""/>
                    </div>
                </div>
                <div className="guidePart" id='queueOptions'>
                    <div className="text">
                        <h3>Queue options</h3>
                        <ul className='primary'>
                            <li>
                                <span className="title">Loop/Repeat</span> - checked by default. Causes queue to send messages in loop. If NOT checked bot will stop itself after sending last message in queue. <br/>
                                If random option is enabled and loop/repeat is disabled bot will avoid repeating messages that were sent before
                            </li>
                            <li>
                                <span className="title">Reply Mode</span> - bot will send message only after someone other than you sends message
                                <ul className='secondary'>
                                    <li><span className="title">Send whole queue</span> - when in reply mode spits out entire queue at once </li>
                                </ul>
                            </li>
                            <li><span className="title">Random</span> - selects messages to send randomly</li>
                            <li><span className="title">Real Type™</span> - shorter messages will be send quicker and longer ones will take more time to send </li>
                            <li><span className="title">Fake Typing</span> - useful if chat has capability of telling you when someone on the other side is typing something</li>
                            <li><span className="title">Send once/x</span> - defines how quickly messages will be send. When set to really low values messages will be send as quickly as your pc is capable of.</li>
                        </ul>
                    </div>
                    <div className="illustration">
                        <img src={options} alt=""/>
                    </div>
                </div>
                <div className="condits guidePart" id='conditionals'>
                    <div className="text">
                        <h3>Conditionals</h3>
                        <p>
                            Conditional messages are sent only when message send by someone (not you) matches one of the IF conditions (upper/lowercase doesn't matter).
                            IF condition can be just a plain text as well as regular expression (RegEx) contained in slashes '/[your message]/'. (Wtf is a RegEx? - <a href='https://regexr.com/' target='blank'>Click</a>).
                            Always only first matching conditional is send.
                        </p>
                        <p>
                            In the example here we see 3 diffrent IF statements. First one (plain text) will fire only when message on the chat is exactly 'hi' (not 'hi!') and send back THEN message, here it is 'hi'.
                        </p>
                        <p>
                            Second IF uses RegEx, so it will match any message that contains 'hello', for instance 'Hello Radek' or 'im not saying hello'.
                        </p>
                        <p>
                            Third and last IF uses RegEx too, but this one will match any message containing hi or hello or hey and reply 'hey'.
                        </p>
                        <p>This is of course only scratching the surface, to learn more about RegExes click <a href='https://regexr.com/' target='blank'>here</a>.</p>
                    </div>
                    <div className="illustration">
                        <img src={condits} alt=""/>
                    </div>
                </div>

                <p>
                    When you have an account, saving and retrieving your templates is easier and safer.
                </p>
                <div className="guidePart" id='account'>
                    <div className="text">
                        <h3>Creating account, logging in</h3>
                        <p>
                            While you are logged in, bot creates auto-saves so you won't loose your template.
                        </p>
                        <p>
                            When logging in you will be asked if you want to load your autosave, but if you dismiss you can still access your autosave by going into browse window.
                        </p>
                    </div>
                    <div className="illustration">
                        <img style={{width: '40px'}} src={loginBtn} alt=""/>
                        <span><svg fill='white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg></span>
                        <img src={login} alt=""/>
                    </div>
                </div>

                <div className="guidePart" id='uploading'>
                    <div className="text">
                        <h3>Uploading template</h3>
                        <p>
                            You can save a template either locally or in the cloud.
                        </p>
                        <p>
                            If you want to save template in cloud, you have to be logged in. you can make it private or visible to everyone.
                        </p>
                        <p>
                            Second option is exporting to a file. If you want you can specify the file name.
                        </p>
                    </div>
                    <div className="illustration">
                        <img className='notFullWidth' src={uploadBtn} alt=""/>
                        <span><svg fill='white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg></span>
                        <img src={upload} alt=""/>
                    </div>
                </div>

                <div className="guidePart" id='browsing'>
                    <div className="text">
                        <h3>Browsing and editing templates</h3>
                        <p>In this window you can search, apply, remove and edit templates.</p>
                        <p>Filter your templates by clicking 'my templates' at the top</p>
                        <p>To apply, click + in the top right corner of template.</p>
                        <p>To edit or remove template that you own, click 3 dots in the top left corner of template.</p>
                        <p>While in edit mode bot has red border around the panel and you can change template name, private option and any other setting or message. You can cancel or save edits.</p>
                    </div>
                    <div className="illustration">
                        <img className='notFullWidth' src={browseBtn} alt=""/>
                        <span><svg fill='white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg></span>
                        <img src={browse} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
