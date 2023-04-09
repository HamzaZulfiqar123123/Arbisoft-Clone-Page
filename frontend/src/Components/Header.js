import React, { useState } from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './Header.css'

const Header = () => {

    const [isHovered1, setIsHovered1] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHovered1(false);
    };

    const [isHovered2, setIsHovered2] = useState(false);

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };

    const [isHovered3, setIsHovered3] = useState(false);

    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };

    const [isHovered4, setIsHovered4] = useState(false);

    const handleMouseEnter4 = () => {
        setIsHovered4(true);
    };

    const handleMouseLeave4 = () => {
        setIsHovered4(false);
    };

    const [isHovered5, setIsHovered5] = useState(false);

    const handleMouseEnter5 = () => {
        setIsHovered5(true);
    };

    const handleMouseLeave5 = () => {
        setIsHovered5(false);
    };

    return (
        <div>
            <AppBar style={{ backgroundColor: 'white' }} className='appbar'>
                <Toolbar className='toolbar'>
                    <img className='logo' src='/Media/Arbisoft-logo.png' />
                    <a style={{ marginLeft: '4%' }} className='link' href='#'>Why Arbisoft</a>
                    <div className="mt-3 dropdown-menu-container" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                        <a className="link">What We Do<KeyboardArrowDownIcon /></a>
                        <ul className={`dropdown-menu ${isHovered1 ? 'show' : ''}`}>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Data and Artificial Intelligence</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Enterpize Software Development</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Web App Development</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Mobile App Development</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Education Technology</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />QA and Software Testing</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />UX, Product and Design</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Web Scraping</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Cyber Security</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />DevOps Solutions</a>&nbsp;&nbsp;</li>
                        </ul>
                    </div>
                    <div className="mt-3 dropdown-menu-container" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                        <a className="link">Who We Work With<KeyboardArrowDownIcon /></a>
                        <ul style={{ width: '250px' }} className={`dropdown-menu ${isHovered2 ? 'show' : ''}`}>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Technology</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Education</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Travel</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />HealthCare</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Finance</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />E-Commerce</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Case Studios</a>&nbsp;&nbsp;</li>
                        </ul>
                    </div>
                    <div className="mt-3 dropdown-menu-container" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                        <a className="link">Our Products<KeyboardArrowDownIcon /></a>
                        <ul style={{ width: '250px' }} className={`dropdown-menu ${isHovered3 ? 'show' : ''}`}>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Edly</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />MoonBean</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Hirestream</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Workstream</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />ilmX</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Nurture</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Fatafat</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Schoolgram</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />ListenTool</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Xiangqi</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Sentimeter</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Juniper</a>&nbsp;&nbsp;</li>
                        </ul>
                    </div>
                    <a className='link' href='#'>Our Work</a>
                    <div className="mt-3 dropdown-menu-container" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                        <a className="link">Inside Arbisoft<KeyboardArrowDownIcon /></a>
                        <ul style={{ width: '250px' }} className={`dropdown-menu ${isHovered4 ? 'show' : ''}`}>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Life at Arbisoft</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Arbisoft Engineering</a>&nbsp;&nbsp;</li>
                        </ul>
                    </div>
                    <div className="mt-3 dropdown-menu-container" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
                        <a className="link">Careers<KeyboardArrowDownIcon /></a>
                        <ul style={{ width: '250px' }} className={`dropdown-menu ${isHovered5 ? 'show' : ''}`}>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Fresh Grad</a>&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;<a className='link1' href='#'><ArrowRightIcon />Open Positions</a>&nbsp;&nbsp;</li>
                        </ul>
                    </div>
                    <Button style={{ borderRadius: '30px', marginTop: '17px', marginLeft: '10px' }} variant='contained'>Contact Us</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header