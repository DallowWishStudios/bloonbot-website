import React, { Component } from 'react'
import ImgsLoaded from 'react-on-images-loaded'

import LandingPage from '../Components/LandingPage'
import DownloadPage from '../Components/Download'
import Footer from '../Components/Footer'
import '../styles/App.scss'
import Navbar from '../Components/Navbar'
import Installation from '../Components/Installation'
import Guide from '../Components/Guide'
import FooterDetails from '../Components/parts/FooterDetails'

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            topOffsets: [],
            isMobile: false,
            isMobileNavOpen: false
        }
        this.navBar = React.createRef()
    }

    componentWillUnmount(){
        window.onresize = () => false
    }

    componentDidMount() {
        this.setMobile()

        window.onresize = e => {
            this.setMobile()
            this.checkTopOffsets()
        }
    }

    setMobile() {
        this.setState({
            ...this.state,
            isMobile: window.innerWidth < 1100 ? true : false
        })
    }

    checkTopOffsets() {
        const mainParts = document.querySelectorAll('.mainPage')
        const topOffsets = []
        mainParts.forEach((el) => {
            topOffsets.push(el.offsetTop)
        })

        this.setState({
            topOffsets
        })
    }

    setMobileNavOpen(isOpen) {
        this.setState({
            isMobileNavOpen: isOpen
        })
    }

    toggleMobileNav() {
        this.navBar.current.toggleMobileNav()
    }

    imagesLoaded() {
        this.checkTopOffsets()
    }

    render() {
        return (
            <ImgsLoaded onLoaded={ this.imagesLoaded.bind(this) } >
                <Navbar 
                    topOffsets={ this.state.topOffsets } 
                    isMobile={ this.state.isMobile } 
                    FooterDetails={ this.state.isMobile ? <FooterDetails/> : null } 
                    setMobileNavOpen={ this.setMobileNavOpen.bind(this) }
                    ref={ this.navBar }
                />
                <div onClick={this.toggleMobileNav.bind(this)} className={ `menuOverlay ${(this.state.isMobileNavOpen ? 'active' : '')}` }></div>
                <main>
                    <LandingPage />
                    <DownloadPage />
                    <Installation />
                    <Guide />
                </main>
                <Footer FooterDetails={ FooterDetails } isMobile={ this.state.isMobile } />
            </ImgsLoaded>
        )
    }
}