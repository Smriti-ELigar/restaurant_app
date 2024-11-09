import React,{useState} from 'react'

const Nav = () => {
    const[menuOpen,setMenuOpen]=useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
// menuOpen is a state variable that keeps track of whether the menu is open.
// setMenuOpen is a function used to update the value of menuOpen.
// useState(false) initializes menuOpen to false, meaning the menu is closed by default.
// toggleMenu is a function that inverts the current value of menuOpen.
// When called, toggleMenu sets menuOpen to the opposite of its current value (!menuOpen).
// If menuOpen is false (menu is closed), calling toggleMenu will set it to true (menu is open), and vice versa.
  return (
    <nav className={`navbar ${menuOpen ? "open":"" }`}>
        <a href="/"className='logo'>
            <img src="/Logo.svg" alt="logo" />
        </a>
        {/* mobile navbar */}
        <div className='menu-icon'onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        {/* nav items */}
        <ul className={`nav-links ${menuOpen ? "visible": ""}`}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Services</a>
            </li>
            <li>
                <a href="/">Menu</a>
            </li>
            <li>
                <a href="/">Reservations</a>
            </li>
            <li>
                <a href="/">Order Online</a>
            </li>
            <li>
                <a href="/">Login</a>
            </li>
        </ul>

    </nav>
  )
}

export default Nav