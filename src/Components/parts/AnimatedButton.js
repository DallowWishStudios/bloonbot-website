import React from 'react'
import '../../styles/components/AnimatedButton.scss'

function AnimatedButton({text, svgPath, href}){
    return (
        // <div className="btnContainer">
            <a className="btn" href={href} download='BloonBot Launcher (6obcy).exe'>
                <span className='content'>
                    <svg className='secondary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={svgPath}/></svg>
                    <svg className='primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={svgPath}/></svg>
                    {text}
                </span>
            </a> 
        // </div>
    )
}

export default AnimatedButton