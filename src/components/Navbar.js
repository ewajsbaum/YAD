import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../style/Navbar.css'
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
        <>
            <div className={hideNav ? "navbar hideNav" : "navbar"}>
                <Link to="/">Home</Link>
                <Link to='/about'>About</Link>
                <Link to="/properties">Properties</Link>
            </div >
            <div className="mobileNavButton" onClick={() => toggleMobileNavMenu()}>
                {!showMobileNav ? '| |' : 'X'}
            </div>
            <div className={`mobileNavMenu ${showMobileNav ? 'show' : ''}`} onClick={() => toggleMobileNavMenu()}>
                <Link to="/">Home</Link>
                <Link to='/about'>About</Link>
                <Link to="/properties">Properties</Link>
            </div>
            <Outlet />
        </>
    )
}
