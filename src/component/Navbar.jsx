import React, {useState, useEffect} from "react";

import "./navbar.css";

const Navbar = () => {
    const [scrolled, setscrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setscrolled(true);
        } else {
            setscrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (
        <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <div>
                <img src="" alt="" />
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="">MEN</a></li>
                    <li><a href="">WOMEN</a></li>
                    <li><a href="">KIDS</a></li>
                    <li><a href="">SPORTS</a></li>
                    <li><a href="">BRANDS</a></li>
                    <li><a href="">COLLECTIONS</a></li>
                    <li><a href="">OUTLET</a></li>
                    <li><input type="text" placeholder="Search" /></li>
                </ul>


            </nav>
        </header>
    )
}


export default Navbar;