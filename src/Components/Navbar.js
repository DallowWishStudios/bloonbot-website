import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.nav = React.createRef()
    this.mobileNav = React.createRef()
    this.navBar = React.createRef()
    this.burgerMenu = React.createRef()
    this.state = {}
    this.sealed = false
    this.prevActiveItem = null
  }

  componentWillUnmount(){
    document.onscroll = null
  }

  componentDidUpdate(){
    this.handleScroll.bind(this)()
    
    if(this.sealed) return
    this.sealed = true

    document.onscroll = this.handleScroll.bind(this)
  }

  handleScroll(){
    const scrollY = window.scrollY
    const navItems = this.nav.current.children
    const topOffsets = this.props.topOffsets
  
    const activeOffsetIndex = topOffsets.findIndex((offset) => {
      return scrollY+300 <= offset
    });
    
    let activeItem = navItems[activeOffsetIndex-1]
    if(!activeItem){
      activeItem = navItems[navItems.length-1]
    }
  
    if(this.prevActiveItem) this.prevActiveItem.classList.remove('active')
    activeItem.classList.add('active')
    this.prevActiveItem = activeItem
  }

  toggleMobileNav(e){
    const isOpen = !this.mobileNav.current.classList.toggle('closed')
    this.props.setMobileNavOpen(isOpen)
    this.burgerMenu.current.classList.toggle('closed')
  }

  placeMobileMenu(){
    return (
      <>
        <div className="burgerMenu closed" ref={ this.burgerMenu } onClick={ this.toggleMobileNav.bind(this) }>
          <svg className='menu' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg>
          <svg className='close' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
        </div>
        <div className="mobileNav closed" ref={ this.mobileNav }>
          { this.placeNavItems() }
				  { this.props.FooterDetails }
        </div>
      </>
    )
  }

  placeNavItems(){
    return (
      <nav className='mainNav' ref={this.nav}>
        <Link className='navItem' to='#home'> <span className='text'> Home </span> </Link>
        <Link className='navItem' to='#download'> <span className='text'> Download </span> </Link>
        <Link className='navItem' to='#installation'> <span className='text'> Installation </span> </Link>
        <Link className='navItem' to='#quickGuide'> <span className='text'> Quick Guide </span></Link>
        <Link className='navItem' to='#guide'> <span className='text'> Guide </span></Link>
        <Link className='navItem' to='#contact'> <span className='text'> Contact </span></Link>  
      </nav>
    )
  }

  render(){
    return (
      <header className='NavBar' ref={this.navBar}>
        <h2><Link to='#home'>BLOONBOT<sub>beta</sub></Link></h2>
        { this.props.isMobile ? this.placeMobileMenu() : this.placeNavItems() }
      </header>
    )
  }
}

export default Navbar