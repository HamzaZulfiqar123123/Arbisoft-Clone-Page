import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react'
import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Gallery = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [hovered, setHovered] = React.useState(false);
    const [hovered2, setHovered2] = React.useState(false);
    const [hovered3, setHovered3] = React.useState(false);
    const [hovered4, setHovered4] = React.useState(false);

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

    const handleHover3 = () => {
        setHovered3(true);
    };

    const handleLeave3 = () => {
        setHovered3(false);
    };

    const handleHover4 = () => {
        setHovered4(true);
    };

    const handleLeave4 = () => {
        setHovered4(false);
    };

    const buttonStyle = {
        backgroundColor: hovered ? '#0d3f8a' : 'white',
        color: hovered ? 'white' : '#0d3f8a',
        border: '1px solid #0d3f8a',
        marginTop: '20px',
        borderRadius: '30px',
        padding: '15px',
    };
    const buttonStyle2 = {
        backgroundColor: hovered2 ? '#0d3f8a' : 'white',
        color: hovered2 ? 'white' : '#0d3f8a',
        border: '1px solid #0d3f8a',
        marginTop: '25px',
        borderRadius: '30px',
        padding: '15px',
    };
    const buttonStyle3 = {
        backgroundColor: hovered3 ? '#0d3f8a' : 'white',
        color: hovered3 ? 'white' : '#0d3f8a',
        border: '1px solid #0d3f8a',
        marginTop: '25px',
        borderRadius: '30px',
        padding: '15px',
    };
    const buttonStyle4 = {
        backgroundColor: hovered4 ? '#0d3f8a' : 'white',
        color: hovered4 ? 'white' : '#0d3f8a',
        border: '1px solid #0d3f8a',
        marginTop: '25px',
        borderRadius: '30px',
        padding: '15px',
    };

    return (
        <div style={{ height: '160vh', width: '100%' }}>
            <Box sx={{ width: '85%', typography: 'body1', marginLeft: '7%' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab style={{ fontSize: 'large' }} label="Industries" value="1" />
                            <Tab style={{ fontSize: 'large' }} label="Services" value="2" />
                            <Tab style={{ fontSize: 'large' }} label="Products" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div className='row'>
                            <div style={{ width: '50%' }}>
                                <div style={{ position: 'absolute', zIndex: '1', width: '40%', padding: '80px 40px', color: 'white' }}>
                                    <h1 style={{ fontSize: '60px', fontWeight: 'bolder' }}>Education</h1>
                                    <h5 style={{ marginTop: '20px' }}>We have partnered with some of the leading education and financial institutions, and nonprofits to modernize the way the world learns.</h5>
                                    <Button onMouseEnter={handleHover} onMouseLeave={handleLeave} style={buttonStyle} variant='contained'>Learn More</Button>
                                </div>
                                <img style={{ width: '105%', position: 'relative', zIndex: '0' }} src='/Media/galleryimg1.png' />
                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ position: 'absolute', zIndex: '1', width: '40%', padding: '80px 40px', color: 'white' }}>
                                    <h1 style={{ fontSize: '60px', fontWeight: 'bolder' }}>Finance</h1>
                                    <h5 style={{ marginTop: '20px' }}>Our experts have teamed up with a wide range of organisation's to help them adjust to fast-paced changes in the financial sector.</h5>
                                    <Button onMouseEnter={handleHover2} onMouseLeave={handleLeave2} style={buttonStyle2} variant='contained'>Learn More</Button>
                                </div>
                                <img style={{ width: '105%', position: 'relative', zIndex: '0' }} src='/Media/galleryimg2.png' />
                            </div>
                        </div>
                        <div className='row'>
                            <div style={{ width: '50%' }}>
                                <div style={{ position: 'absolute', zIndex: '1', width: '40%', padding: '80px 40px', color: 'white' }}>
                                    <h1 style={{ fontSize: '60px', fontWeight: 'bolder' }}>Healthcare</h1>
                                    <h5 style={{ marginTop: '20px' }}>Our apps have contributed to the technological revolution in the healthcare industry, from educating medical students to managing patients in clinics.</h5>
                                    <Button onMouseEnter={handleHover3} onMouseLeave={handleLeave3} style={buttonStyle3} variant='contained'>Learn More</Button>
                                </div>
                                <img style={{ width: '105%', position: 'relative', zIndex: '0' }} src='/Media/galleryimg3.png' />
                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ position: 'absolute', zIndex: '1', width: '40%', padding: '80px 40px', color: 'white' }}>
                                    <h1 style={{ fontSize: '60px', fontWeight: 'bolder' }}>Travel</h1>
                                    <h5 style={{ marginTop: '20px' }}>We enable leading travel & hospitality search engines with our dedicated team of software developers, machine learning and data engineers.</h5>
                                    <Button onMouseEnter={handleHover4} onMouseLeave={handleLeave4} style={buttonStyle4} variant='contained'>Learn More</Button>
                                </div>
                                <img style={{ width: '105%', position: 'relative', zIndex: '0' }} src='/Media/galleryimg4.png' />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div>
                            <div className='row'>
                                <div style={{ width: '50%', border: '1px solid grey', height: '75vh', paddingLeft: '30px', borderRight: '0px', borderBottom: '0px' }}>
                                    <img style={{ width: '80px', margin: '40px' }} src='/Media/galleryimg5.png' />
                                    <h1 style={{ fontWeight: 'bolder', color: '#223554' }}>Data and AI</h1>
                                    <br />
                                    <h5>We can help you unlock your business potential with our cutting-edge Machine Learning and Artificial Intelligence capabilities.</h5>
                                    <Button onMouseEnter={handleHover} onMouseLeave={handleLeave} style={buttonStyle} variant='contained'>Learn More</Button>
                                </div>
                                <div style={{ width: '50%', border: '1px solid grey', height: '75vh', paddingLeft: '30px', borderBottom: '0px' }}>
                                    <img style={{ width: '80px', margin: '40px', borderBottom: '0px' }} src='/Media/galleryimg6.png' />
                                    <h1 style={{ fontWeight: 'bolder', color: '#223554' }}>Web Apps</h1>
                                    <br />
                                    <h5>We provide custom-tailored solutions for each phase of development from designing to coding and implementation.</h5>
                                    <Button onMouseEnter={handleHover2} onMouseLeave={handleLeave2} style={buttonStyle2} variant='contained'>Learn More</Button>
                                </div>
                            </div>
                            <div className='row'>
                                <div style={{ width: '50%', border: '1px solid grey', height: '75vh', paddingLeft: '30px', borderRight: '0px' }}>
                                    <img style={{ width: '80px', margin: '40px' }} src='/Media/galleryimg7.png' />
                                    <h1 style={{ fontWeight: 'bolder', color: '#223554' }}>Mobile Apps</h1>
                                    <br />
                                    <h5>We build native apps optimized for iOS and Android to provide users with a seamless mobile experience that leverages the full power of the OS.</h5>
                                    <Button onMouseEnter={handleHover3} onMouseLeave={handleLeave3} style={buttonStyle3} variant='contained'>Learn More</Button>
                                </div>
                                <div style={{ width: '50%', border: '1px solid grey', height: '75vh', paddingLeft: '30px' }}>
                                    <img style={{ width: '80px', margin: '40px' }} src='/Media/galleryimg8.png' />
                                    <h1 style={{ fontWeight: 'bolder', color: '#223554' }}>Enterprise Software</h1>
                                    <br />
                                    <h5>We bring your ideas to life with our turnkey solutions that are custom-designed to fit into your enterprise software ecosystem.</h5>
                                    <Button onMouseEnter={handleHover4} onMouseLeave={handleLeave4} style={buttonStyle4} variant='contained'>Learn More</Button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="3">
                        <div>
                            <div className='row'>
                                <div style={{ width: '50%', border: '1px solid grey', height: '70vh', paddingLeft: '30px', borderRight: '0px', borderBottom: '0px' }}>
                                    <img style={{ width: '150px', margin: '40px 0px' }} src='/Media/galleryimg9.png' />
                                    <br />
                                    <h5 style={{ wordSpacing: '3px' }}>A learning and training management system that responds to your needs and delivers accordingly while simultaneously connecting you to your audience.</h5>
                                    <Button onMouseEnter={handleHover} onMouseLeave={handleLeave} style={buttonStyle} variant='contained'>Explore Edly&nbsp;&nbsp;<OpenInNewIcon fontSize='small' /></Button>
                                </div>
                                <div style={{ width: '50%', border: '1px solid grey', height: '70vh', paddingLeft: '30px', borderBottom: '0px' }}>
                                    <img style={{ width: '250px', margin: '65px 0px' }} src='/Media/galleryimg10.png' />
                                    <br />
                                    <h5 style={{ wordSpacing: '3px' }}>A podcast player that enables listeners to sift through short audio clips from different podcasts and find new shows that they otherwise wouldn’t come across.</h5>
                                    <Button onMouseEnter={handleHover2} onMouseLeave={handleLeave2} style={buttonStyle2} variant='contained'>Explore Moonbean&nbsp;&nbsp;<OpenInNewIcon fontSize='small' /></Button>
                                </div>
                            </div>
                            <div className='row'>
                                <div style={{ width: '50%', border: '1px solid grey', height: '70vh', paddingLeft: '30px', borderRight: '0px' }}>
                                    <img style={{ width: '250px', margin: '40px 0px' }} src='/Media/galleryimg11.png' />
                                    <br />
                                    <h5 style={{ wordSpacing: '3px' }}>An applicant tracking system and recruiting software that gives you more power over hiring decisions that matter. Hirestream automates the tasks that slow you down and refines your process through single-click bulk applicant management.</h5>
                                    <Button onMouseEnter={handleHover3} onMouseLeave={handleLeave3} style={buttonStyle3} variant='contained'>Explore Hirestream&nbsp;&nbsp;<OpenInNewIcon fontSize='small' /></Button>
                                </div>
                                <div style={{ width: '50%', border: '1px solid grey', height: '70vh', paddingLeft: '30px' }}>
                                    <img style={{ width: '120px', margin: '41px 0px' }} src='/Media/galleryimg12.png' />
                                    <br />
                                    <h5 style={{ wordSpacing: '3px' }}>A social enterprise committed to connecting and empowering learners by making e-learning opportunities accessible and affordable for all.</h5>
                                    <Button onMouseEnter={handleHover4} onMouseLeave={handleLeave4} style={buttonStyle4} variant='contained'>Explore ilmX&nbsp;&nbsp;<OpenInNewIcon fontSize='small' /></Button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    )
}

export default Gallery