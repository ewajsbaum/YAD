import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../style/Navbar.css'
import logo from '../images/logo.png'
export function Navbar() {

    const [scrollData, setScrollData] = useState({
        y: 0,
        lastY: 0
    });

    const [hideNav, setHideNav] = useState(false);

    const [showMobileNav, setShowMobileNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollData(prevState => {
                return {
                    y: window.scrollY,
                    lastY: prevState.y
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (scrollData.y > 200)
            setHideNav(true)
        else
            setHideNav(false)

        if (scrollData.lastY < scrollData.y)
            setHideNav(true)
        else
            setHideNav(false)

    }, [scrollData])

    const toggleMobileNavMenu = () => {
        setShowMobileNav(!showMobileNav)
    }

    return (
        <div className="navContainer">
            <div className={hideNav ? "navbar hideNav" : "navbar"}>
                <Link to="/" className="navLogoLink"><img src={logo} alt="yad" className="navlogo" /></Link>
                <div className="navlinks">
                    <Link to="/">Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to="/properties">Properties</Link>
                    <Link to="https://commercialcafe.securecafe3.com/newtenantportal/content2/login/?companyId=3762">Tenant</Link>
                </div>
            </div >
            <div className="mobileNavButton" onClick={() => toggleMobileNavMenu()}>
                {!showMobileNav ? '| |' : 'X'}
            </div>
            <div className={`mobileNavMenu ${showMobileNav ? 'show' : ''}`} onClick={() => toggleMobileNavMenu()}>
                <Link to="/">Home</Link>
                <Link to='/about'>About</Link>
                <Link to="/properties">Properties</Link>
                <Link to="https://commercialcafe.securecafe3.com/newtenantportal/content2/login/?companyId=3762">Tenant Portal</Link>

            </div>
            <Outlet />
            <div className="footer">
                <Link to="/" className="navLogoLink"><img src={logo} alt="yad" className="navlogo footerImg" /></Link>
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to="/properties">Properties</Link>
                    <Link to="https://commercialcafe.securecafe3.com/newtenantportal/content2/login/?companyId=3762">Tenant Portal</Link>
                </div>
                <div className="contact">
                    <div>T:  (416) 977 - 7781</div>
                    <div>F:  (416) 977 - 3451</div>
                    <div>E:  office@yad.ca</div>
                    <div>197 Spadina Avenue, Suite 500 <br /> Toronto, Ontario M5T 2C8</div>
                </div>
            </div >
        </div>
    )
}
