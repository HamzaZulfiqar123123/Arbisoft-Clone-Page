import { Divider, Grid } from '@mui/material'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Reviews = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <div style={{ height: '85vh', width: '100%' }}>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div>
                    <div style={{ position: 'absolute' }}>
                        <img style={{ height: '85vh', backgroundSize: 'cover', width: '100%' }} src='/Media/page2img.png' />
                    </div>
                    <div style={{ backgroundColor: 'white', position: 'relative', borderRadius: '15px', padding: '40px' }}>
                        <div style={{ textAlign: 'center', paddingBottom: '50px' }}>
                            <h1 style={{ fontWeight: 'bold', fontSize: '60px' }}><span style={{ color: '#223554' }}>A Journey of </span><span style={{ color: '#0a76db' }}>15 Years</span></h1>
                        </div>
                        <Grid container>
                            <Grid item xs>
                                <div style={{ textAlign: 'center' }}>
                                    <img src='/Media/icon-people.png' />
                                    <h1 style={{ fontWeight: 'bolder', paddingTop: '13px' }}>{counterOn && <CountUp start={0} end={850} duration={5} delay={0} />}+</h1>
                                    <h4>People onboard</h4>
                                </div>
                            </Grid>
                            <Divider orientation='vertical' flexItem />
                            <Grid item xs>
                                <div style={{ textAlign: 'center' }}>
                                    <img src='/Media/icon-home.png' />
                                    <h1 style={{ fontWeight: 'bolder', paddingTop: '20px' }}>{counterOn && <CountUp start={0} end={4} duration={5} delay={0} />}</h1>
                                    <h4>Global Offices</h4>
                                </div>
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs>
                                <div style={{ textAlign: 'center' }}>
                                    <img src='/Media/icon-bulb.png' />
                                    <h1 style={{ fontWeight: 'bolder', paddingTop: '5px', marginLeft: '16px' }}>{counterOn && <CountUp start={0} end={550} duration={5} delay={0} />}+</h1>
                                    <h4>Projects Completed</h4>
                                </div>

                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs>
                                <div style={{ textAlign: 'center', alignItems: 'center' }}>
                                    <img src='/Media/icon-clutch.png' />
                                    <h1 style={{ fontWeight: 'bolder', paddingTop: '20px' }}>{counterOn && <CountUp start={0} end={4} duration={5} delay={0} />}.{counterOn && <CountUp start={0} end={9} duration={3} delay={0} />}</h1>
                                    <h4>Clutch Rating</h4>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    )
}

export default Reviews