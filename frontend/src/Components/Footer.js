import { Button, Divider } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div style={{ height: '100vh', backgroundColor: '#0d3f8a', fontSize: '17px', color: '#c0cdf7' }}>
                <div style={{ width: '70%', padding: '50px', float: 'left' }}>
                    <p>For job opportunities, reach out to <span style={{ color: 'white' }}>pod@arbisoft.com</span></p>
                    <p>For business enquiries, reach out to <span style={{ color: 'white' }}>contact@arbisoft.com</span></p>
                    <br /><br />
                    <div className='row'>
                        <div className='col-sm-4'>
                            <p>+1 (469) 215 2958<br />
                                2035 Central Cir Suite #201<br />
                                McKinney, TX 75069</p>
                        </div>
                        <div className='col-sm-4'>
                            <p>(042) 37498533<br />
                                25 Canal Rd, Westwood Colony<br />
                                Lahore, Punjab 54000</p>
                        </div>
                        <div className='col-sm-4'>
                            <p>(042) 37498533<br />
                                25 Canal Rd, Westwood Colony<br />
                                Lahore, Punjab 54000</p>
                        </div>
                    </div>
                </div>
                <div style={{ width: '30%', float: 'right', padding: '80px' }}>
                    <img style={{ height: '200px' }} src='/Media/footerimg.png' />
                </div>
                <div style={{ margin: '2%', borderTop: '1px solid #c0cdf7', float: 'left', width: '96%' }}>
                    <div style={{ float: 'left', padding: '30px' }}>
                        <p>© 2023 Arbisoft. All Rights Reserved.</p>
                        <a style={{ textDecoration: 'none', color: '#c0cdf7' }} href='#'>Privacy Policy</a><br /><br />
                        <a style={{ textDecoration: 'none', color: '#c0cdf7' }} href='#'>Imprint</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer