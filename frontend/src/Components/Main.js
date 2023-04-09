import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from 'react'

const Main = () => {

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
        backgroundColor: hovered ? '#0d3f8a' : '',
        color: hovered ? 'white' : '',
        border: '1px solid #0d3f8a',
        marginTop: '30px',
        borderRadius: '30px',
        padding: '15px',
    };
    const buttonStyle2 = {
        backgroundColor: hovered2 ? '#0d3f8a' : 'white',
        color: hovered2 ? 'white' : '#0d3f8a',
        border: '1px solid #0d3f8a',
        marginTop: '15px',
        borderRadius: '30px',
        padding: '15px',
    };

    return (
        <div >
            <div style={{ marginTop: '90px' }} id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ width: '100%', minHeight: '85vh', position: 'absolute' }} src="/Media/Pageimg1.png" className="d-block" alt="..." />
                        <div className='row'>
                            <div style={{ position: 'relative', marginLeft: '10%', color: 'white' }} className='col-md-5'>
                                <h1 style={{ fontWeight: 'bolder', marginTop: '60px' }}>Building Powerful Digital Solutions for a Better World</h1>
                                <h5 style={{ fontWeight: 'lighter', marginTop: '30px' }}>Harness the power of technology to set yourself apart and reshape the way of your business finds success.</h5>
                                <Button onMouseEnter={handleHover} onMouseLeave={handleLeave} style={buttonStyle} variant='contained'>Tell Us About Your Project&nbsp;&nbsp;<ArrowForwardIcon fontSize='small' /></Button>

                            </div>
                            <img style={{ position: 'relative', height: '85vh', padding: '20px 50px' }} className='col-md-5' src='/Media/page1logo.png' />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{ width: '100%', minHeight: '85vh', position: 'absolute' }} src="/Media/pageimg2.png" className="d-block" alt="..." />
                        <div className='row'>
                            <div style={{ position: 'relative', marginLeft: '10%', color: 'white' }} className='col-md-5'>
                                <h1 style={{ fontWeight: 'bolder', marginTop: '30px' }}>Helping Educate Over 20 Million Learners Around the World</h1>
                                <h5 style={{ fontWeight: 'lighter', marginTop: '30px' }}>As The Official tech partners for edX since 2012, we have helped learners access education on-to-go with thousands of courses at their disposal, anywhere anytime.</h5>
                                <Button onMouseEnter={handleHover} onMouseLeave={handleLeave} style={buttonStyle} variant='contained'>View Our Success Story&nbsp;&nbsp;<ArrowForwardIcon fontSize='small' /></Button><br />
                                <Button onMouseEnter={handleHover2} onMouseLeave={handleLeave2} style={buttonStyle2} variant='contained'>Tell Us About Your Project&nbsp;&nbsp;<ArrowForwardIcon fontSize='small' /></Button>
                            </div>
                            <img style={{ position: 'relative', height: '85vh', padding: '130px 130px' }} className='col-md-5' src='/Media/page2logo.png' />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{ width: '100%', minHeight: '85vh', position: 'absolute' }} src="/Media/pageimg3.png" className="d-block" alt="..." />
                        <div className='row'>
                            <div style={{ position: 'relative', marginLeft: '10%', color: 'white' }} className='col-md-5'>
                                <h1 style={{ fontWeight: 'bolder', marginTop: '30px' }}>Helping Build One of the World's Largest travel search engines.</h1>
                                <h5 style={{ fontWeight: 'lighter', marginTop: '30px' }}>We have partnered with KAYAK to revolutionize the travelling experience fro over 50 million happy users around the globe and continue to build an industry-lrading</h5>
                                <Button onMouseEnter={handleHover} onMouseLeave={handleLeave} style={buttonStyle} variant='contained'>View Our Success Story&nbsp;&nbsp;<ArrowForwardIcon fontSize='small' /></Button><br />
                                <Button onMouseEnter={handleHover2} onMouseLeave={handleLeave2} style={buttonStyle2} variant='contained'>Tell Us About Your Project&nbsp;&nbsp;<ArrowForwardIcon fontSize='small' /></Button>
                            </div>
                            <img style={{ position: 'relative', height: '85vh', padding: '150px 120px' }} className='col-md-5' src='/Media/page3logo.png' />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Main