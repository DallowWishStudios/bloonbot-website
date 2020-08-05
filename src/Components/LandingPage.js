import React from 'react'
import {ReactComponent as Icon} from '../img/svg/bloonCorner.svg'

function LandingPage(){
    return (
        <section className='LandingPage mainPage'>
            <Icon className='bloonMain'></Icon>
            <div className='mainSentences'>
                <h1>
                    {/* This is <br/>
                    the bot you <br/>
                    have been <br/>
                    waiting for */}
                    Chat bot like <br/> you've never <br/> seen before
                </h1>
                <p>
                    Explore one of the most advanced injectable bots <br/>
                    - it is easy to use and has tons of features
                </p>
                <div className="btns">
                    <a className="btn primary" href='#download'>Explore</a>
                    <a className="btn secondary" href='https://www.patreon.com/dallowwish' target='blank'>Donate</a>
                </div>
            </div>
        </section>
    )
}

export default LandingPage