import React from 'react'

const Certifications = () => {
    return (
        <div style={{ width: '90%' }} className='container'>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ width: '50%', marginLeft: '25%', color: '#223554' }}>We're proud of our accomplishments</h1>
                <h5 style={{ width: '70%', marginLeft: '15%', fontWeight: 'lighter' }}>As a result of Arbisoft's experience and work ethic, we have formed valuable industry partnerships over the years. This has not only helped us in getting certified from industry leaders, but also in acquiring new businesses and customers.</h5>
            </div>
            <div style={{ marginLeft: '50px' }} className='row'>
                <div className='col-md-2'>
                    <img style={{ float: 'right', padding: '10px 0 10px 10px' }} src='/Media/Microsoft.png' />
                </div>
                <div className='col-md-2'>
                    <img style={{ float: 'right', padding: '40px 40px 20px 0px' }} src='/Media/Mongodb.png' />
                </div>
                <div className='col-md-2'>
                    <img style={{ float: 'right', padding: '60px 50px 20px 0px' }} src='/Media/zyte.png' />
                </div>
                <div className='col-md-2'>
                    <img style={{ float: 'right', padding: '50px 40px 20px 0px' }} src='/Media/edX.png' />
                </div>
                <div className='col-md-2'>
                    <img style={{ float: 'right', padding: '40px 60px 20px 0px' }} src='/Media/Clutch.png' />
                </div>
                <div className='col-md-2'>
                    <img style={{ float: 'right', padding: '50px 80px 20px 0px' }} src='/Media/AWS.png' />
                </div>
            </div>
        </div>
    )
}

export default Certifications