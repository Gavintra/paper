import React,{ useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>

            <IconContext.Provider value={{ color: '#fff'}} >
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            Paper
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    หน้าหลัก
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/all-paper-in' className="nav-links" onClick={closeMobileMenu}>
                                    เอกสารรับเข้าทั้งหมด
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/all-paper-out' className="nav-links" onClick={closeMobileMenu}>
                                    เอกสารส่งออกทั้งหมด
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/document_in' className="nav-links" onClick={closeMobileMenu}>
                                    ทะเบียนหนังสือรับ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/document_out' className="nav-links" onClick={closeMobileMenu}>
                                    ทะเบียนหนังสือส่ง
                                </Link>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>

        </>
    )
}

export default Navbar
