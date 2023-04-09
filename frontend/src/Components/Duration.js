import { Button } from '@mui/material'
import React from 'react'

const Duration = () => {

    const [hovered, setHovered] = React.useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };

    const buttonStyle = {
        backgroundColor: hovered ? '#0d3f8a' : '',
        color: hovered ? 'white' : '',
        marginTop: '25px',
        borderRadius: '30px',
        padding: '15px',
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img style={{ height: '70vh' }} src='/Media/design1.png' />
                </div>
                <div className='col-md-6'>
                    <h1 style={{ color: '#223554', width: '50%', fontWeight: 'bold' }}>Decades of Partnership</h1>
                    <h5 style={{ fontWeight: 'lighter', width: '75%', marginTop: '50px' }}>We are a full-scale software development firm that knows the value of lasting relationships and can combine focused detail-oriented action with long-term strategic thinking.</h5>
                    <Button onMouseEnter={handleHover} onMouseLeave={handleLeave} style={buttonStyle} variant='contained'>View Our Technical Skill Set</Button>
                </div>
            </div>
        </div>
    )
}

export default Duration