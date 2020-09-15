import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import chatSvg from '../img/svg/bloonbot iso art 1.3.svg'
import launcher from '../download/launcher.exe'
import AnimatedButton from './parts/AnimatedButton'

function Download(props){
    return (
        <section className='DownloadPage mainPage' id='download'> 
            <img src={chatSvg} alt="chat" className='chatArt'/>
            <div className="download">
                <header>
                    <h2>Download BloonBot</h2>
                </header>

                <span className='desc'>
                    <p>Installing BloonBot is as simple as downloading and opening installer! 
                        If for some reason installation isn't going as smooth for you, check <Link to="#installation">💻 installation</Link>. 
                        If you installed BloonBot successfully, you can check out <Link to="#guide">📗 guide</Link> to learn how to use the bot.
                    </p>
                    <p>
                        You also can try out bloonbot in BloonBot Testing Environment in which you can send messages either as you or other chatter (or chatters) - that way you can easily test BloonBot features, templates and options.
                    </p>
                    <span className='warning'>Notice that BloonBot is now in experimental phase, so bugs may be occuring. If that happens, please report them <Link to='#contact'>here</Link>.</span>
                </span>

                <div className="details">
                    <span className="system">
                        Windows, Installer
                    </span>
                    <span className="version">
                        v0.3.5 beta
                    </span>
                </div>

                <div className="btns">
                    <AnimatedButton svgPath="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z" href={launcher} text='DOWNLOAD' />
                    <Link to='/bbte' className="btn secondary"> TRY OUT </Link>
                </div>
            </div>
        </section>
    )
}

export default Download;