import { Button } from '@mui/material'
import React from 'react'

const Join = () => {

    const [hovered, setHovered] = React.useState(false);
    const [hovered2, setHovered2] = React.useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };

    const handleHover2 = () => {
        setHovered2(true);
    };

    const handleLeave2 = () => {
        setHovered2(false);
    };

    const buttonStyle = {
        backgroundColor: hovered ? '#0d3f8a' : '#223554',
        color: hovered ? 'white' : 'white',
        marginTop: '20px',
        borderRadius: '30px',
        padding: '15px',
    };
    const buttonStyle2 = {
        backgroundColor: hovered2 ? '#ef813d' : '#f37224',
        color: hovered2 ? 'white' : 'white',
        marginTop: '25px',
        borderRadius: '30px',
        padding: '15px',
    };

    return (
        <div style={{ height: '60vh', marginTop: '20vh' }} className='container-fluid'>
            <div className='row'>
                <div style={{ height: '40vh', width: '50%', backgroundColor: 'rgba(234,249,255,.78)' }}>
                    <div style={{ width: '75%', padding: '30px', float: 'left' }}>
                        <h1 style={{ color: '#223554' }}>Become a part of our global team!</h1>
                        <Button onMouseEnter={handleHover} onMouseLeave={handleLeave} style={buttonStyle} variant='contained'>Apply Here</Button>
                    </div>
                    <div style={{ width: '25%', float: 'right', padding: '19.5% 20px 0px 0px' }}>
                        <img style={{ height: '20vh' }} src='/Media/design2.png' />
                    </div>
                </div>
                <div style={{ height: '40vh', width: '50%', backgroundColor: 'rgb(252, 232, 202)' }}>
                    <div style={{ width: '75%', padding: '30px', float: 'left' }}>
                        <h1 style={{ color: '#223554' }}>Partner with us for your next venture!</h1>
                        <Button onMouseEnter={handleHover2} onMouseLeave={handleLeave2} style={buttonStyle2} variant='contained'>Let's Get Started</Button>
                    </div>
                    <div style={{ width: '25%', float: 'right', padding: '19.5% 20px 0px 0px' }}>
                        <img style={{ height: '20vh' }} src='/Media/design3.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join