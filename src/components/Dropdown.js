import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {

    const handleLinkClick = () => {
        if(isOpen) toggle();
    }

    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-yellow-500' : 'hidden'}>
            <Link className="p-4" to="/" onClick={handleLinkClick}>Home</Link>
            <Link className="p-4" to="/menu" onClick={handleLinkClick}>Menu</Link>
            <Link className="p-4" to="/about" onClick={handleLinkClick}>About</Link>
            <Link className="p-4" to="/contact" onClick={handleLinkClick}>Contact</Link>
        </div>
    )
}

export default Dropdown
