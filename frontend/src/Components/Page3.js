import { Button } from '@mui/material'
import React from 'react'

const Page3 = () => {
    return (
        <div style={{ height: '100vh', width: '100%' }} className='row'>
            <div style={{ zIndex: '2' }} className='col-md-5 p-5'>
                <img style={{ height: '80vh' }} src='/Media/page3img.png' />
            </div>
            <div style={{ backgroundColor: '#f4f5f7', zIndex: '1', padding: '120px 20px 80px 150px', height: '97vh' }} className='col-md-6'>
                <h1 style={{ color: '#223554', fontSize: '50px' }}>We are our people</h1>
                <h5 style={{ fontWeight: '400' }}>Our team of over 800 blends the skills of engineers, developers, UX architects, and designers to craft impactful solutions. Together, we have aided businesses in their journey toward digital transformation by delivering custom software that drives change.</h5>
                <Button style={{ borderRadius: '30px', padding: '13px 23px', marginTop: '30px' }} variant='contained'>Learn More</Button>
            </div>
        </div>
    )
}

export default Page3