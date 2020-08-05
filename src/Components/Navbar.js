import React from 'react'

let prevActiveItem = null
let isTopSqueezed = false
const handleScroll = function (e) {
  // console.log(this.props.location.pathname);

  const scrollY = window.scrollY
  const navItems = this.nav.current.children
  const topOffsets = this.props.topOffsets
  
  // if(!this.props.isMobile){
  //   if(scrollY === 0){
  //     this.nav.current.classList.remove('squeezed')
  //     isTopSqueezed = false
  //   } else if(!isTopSqueezed) {
  //     this.nav.current.classList.add('squeezed')
  //     isTopSqueezed = true
  //   }  
  // }

  const activeOffsetIndex = topOffsets.findIndex((offset) => {
    return scrollY+300 <= offset
  });
  
  let activeItem = navItems[activeOffsetIndex-1]
  if(!activeItem){
    activeItem = navItems[navItems.length-1]
  } 

  if(prevActiveItem) prevActiveItem.classList.remove('active') 
  activeItem.classList.add('active')
  prevActiveItem = activeItem
}

class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.nav = React.createRef()
    this.mobileNav = React.createRef()
    this.navBar = React.createRef()
    this.burgerMenu = React.createRef()
    this.state = {}
    this.sealed = false
  }

  componentWillUnmount(){
    document.onscroll = null
  }

  componentDidUpdate(){
    handleScroll.bind(this)()
    
    if(this.sealed) return
    this.sealed = true

    document.onscroll = handleScroll.bind(this)
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
        <a className='navItem' href='/#'> <span className='text'> Home </span> </a>
        <a className='navItem' href='#download'> <span className='text'> Download </span> </a>
        <a className='navItem' href='#installation'> <span className='text'> Installation </span> </a>
        <a className='navItem' href='#quickGuide'> <span className='text'> Quick Guide </span></a>
        <a className='navItem' href='#guide'> <span className='text'> Guide </span></a>
        <a className='navItem' href='#contact'> <span className='text'> Contact </span></a>  
      </nav>
    )
  }

  render(){
    return (
      <header className='NavBar' ref={this.navBar}>
        <h2><a href='/#'>BloonBot<sub>beta</sub></a></h2>
        { this.props.isMobile ? this.placeMobileMenu() : this.placeNavItems() }
      </header>
    )
  }
}

export default Navbar