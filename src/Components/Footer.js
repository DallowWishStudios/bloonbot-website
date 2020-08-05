import React from 'react'
import ContactForm from './parts/ContactForm'
import Terms from './parts/Terms'

class Footer extends React.Component {
	render(){
		const { FooterDetails, isMobile } = this.props

		return ( 
			<footer className='Footer mainPage' id='contact'>
				<ContactForm />
				{ isMobile ? <Terms/> : <FooterDetails isMobile={isMobile} isForMobileMenu={true}/>}
			</footer>
		)
	}
}

export default Footer