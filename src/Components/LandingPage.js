import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import {ReactComponent as Icon} from '../img/svg/bloonCorner.svg'

function LandingPage(){
    return (
        <section className='LandingPage mainPage' id='home'>
            <Icon className='bloonMain'></Icon>
            <div className='mainSentences'>
                <h1>
                    Chat bot like <br/> you've never <br/> seen before
                </h1>
                <p>
                    Explore one of the most advanced injectable bots
                    - it is easy to use and has tons of features
                </p>
                <div className="btns">
                    <Link className="btn primary" to='#download'>Explore</Link>
                    <Link className="btn secondary" to='#quickGuide' target='blank'>See guide</Link>
                </div>
            </div>
        </section>
    )
}

export default LandingPage