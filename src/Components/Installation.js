import React from 'react'
import installingRoad from '../img/tutorial/installing-road.png'

function HowToUse(props){
    return (
        <section className='HowToUsePage mainPage' id='installation'>
            <div className="installation">
                <header>
                    <h2>Installation</h2>
                </header>
                <ol>
                    <li>After you open launcher, confirm installation. Since then don't use your computer until another window comes up, otherwise bloonbot may not install properly.</li>
                    <li>If second window appears, that means BloonBot should now be installed.</li>
                    <li>If you see BloonBot panel in the upper left corner of your browser then it's installed correctly. If not, try again while making sure that you follow the instruction.</li>
                </ol>

                {/* <header>
                    <h2>Manual Installation</h2>
                </header>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol> */}
            </div>
            <img className='installationPath' src={installingRoad} alt=""/>
        </section>
    )
}

export default HowToUse;