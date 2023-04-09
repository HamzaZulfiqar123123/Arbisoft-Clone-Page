import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Carousel() {

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
        marginLeft: '43%',
        marginTop: '3%',
        borderRadius: '30px',
        padding: '15px',
    };

    return (
        <div style={{ height: '150vh', width: '100%', backgroundColor: '#f0f0f0' }}>
            <div className='container'>
                <h1 style={{ color: '#223554', fontSize: '45px', width: '60%', padding: '50px' }}>Great software needs great relationships</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <Card style={{ boxShadow: '10px black' }}>
                            <CardMedia style={{ height: '35vh', width: '500px', backgroundColor: 'white', margin: '30px 45px' }}>
                                <img src='/Media/sliderimg1.png' />
                            </CardMedia>
                            <CardContent style={{ backgroundColor: '#223554', color: 'white' }}>
                                <Typography style={{ fontSize: 'larger', padding: '5px' }} variant="body2">
                                    Arbisoft Solutions Ensured zero downtown for Travelliance's 7M users, with around-the clock support.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card >
                            <CardMedia style={{ height: '35vh', width: '500px', backgroundColor: 'white', margin: '30px 45px' }}>
                                <img src='/Media/sliderimg2.png' />
                            </CardMedia>
                            <CardContent style={{ backgroundColor: '#223554', color: 'white' }}>
                                <Typography style={{ fontSize: 'larger', padding: '5px' }} variant="body2">
                                    Arbisoft helped edX create apps, courses and data analytics for 20M+ leaners.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card >
                            <CardMedia style={{ height: '35vh', width: '500px', backgroundColor: 'white', margin: '30px 45px' }}>
                                <img src='/Media/sliderimg3.png' />
                            </CardMedia>
                            <CardContent style={{ backgroundColor: '#223554', color: 'white' }}>
                                <Typography style={{ fontSize: 'larger', padding: '5px' }} variant="body2">
                                    We have been with Predict.io throughout the journey to create an app that accurately predicts the parking behavior of drivers.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card >
                            <CardMedia style={{ height: '35vh', width: '500px', backgroundColor: 'white', margin: '30px 45px' }}>
                                <img src='/Media/sliderimg4.png' />
                            </CardMedia>
                            <CardContent style={{ backgroundColor: '#223554', color: 'white' }}>
                                <Typography style={{ fontSize: 'larger', padding: '5px' }} variant="body2">
                                    Arbisoft aided Wanderu's iOS app launch, improving the travel booking expereince with seamless reservations.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card >
                            <CardMedia style={{ height: '35vh', width: '500px', backgroundColor: 'white', margin: '30px 45px' }}>
                                <img src='/Media/sliderimg5.png' />
                            </CardMedia>
                            <CardContent style={{ backgroundColor: '#223554', color: 'white' }}>
                                <Typography style={{ fontSize: 'larger', padding: '5px' }} variant="body2">
                                    Helping Payperks drive positive change for financially-under served consumers institutions which serve them.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card >
                            <CardMedia style={{ height: '35vh', width: '500px', backgroundColor: 'white', margin: '30px 45px' }}>
                                <img src='/Media/sliderimg6.png' />
                            </CardMedia>
                            <CardContent style={{ backgroundColor: '#223554', color: 'white' }}>
                                <Typography style={{ fontSize: 'larger', padding: '5px' }} variant="body2">
                                    Arbisoft helped mortage lenders become more digitally visible & consumers find top rated loan officers.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card >
                            <CardMedia style={{ height: '35vh', width: '500px', backgroundColor: 'white', margin: '30px 45px' }}>
                                <img src='/Media/sliderimg7.png' />
                            </CardMedia>
                            <CardContent style={{ backgroundColor: '#223554', color: 'white' }}>
                                <Typography style={{ fontSize: 'larger', padding: '5px' }} variant="body2">
                                    Arbisoft Solutions Ensured zero downtown for Travelliance's 7M users, with around-the clock support.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card >
                            <CardMedia style={{ height: '35vh', width: '500px', backgroundColor: 'white', margin: '30px 45px' }}>
                                <img src='/Media/sliderimg8.png' />
                            </CardMedia>
                            <CardContent style={{ backgroundColor: '#223554', color: 'white' }}>
                                <Typography style={{ fontSize: 'larger', padding: '5px' }} variant="body2">
                                    Arbisoft Solutions Ensured zero downtown for Travelliance's 7M users, with around-the clock support.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card >
                            <CardMedia style={{ height: '35vh', width: '500px', backgroundColor: 'white', margin: '30px 45px' }}>
                                <img src='/Media/sliderimg9.png' />
                            </CardMedia>
                            <CardContent style={{ backgroundColor: '#223554', color: 'white' }}>
                                <Typography style={{ fontSize: 'larger', padding: '5px' }} variant="body2">
                                    Arbisoft Solutions Ensured zero downtown for Travelliance's 7M users, with around-the clock support.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card >
                            <CardMedia style={{ height: '35vh', width: '500px', backgroundColor: 'white', margin: '30px 45px' }}>
                                <img src='/Media/sliderimg10.png' />
                            </CardMedia>
                            <CardContent style={{ backgroundColor: '#223554', color: 'white' }}>
                                <Typography style={{ fontSize: 'larger', padding: '5px' }} variant="body2">
                                    Arbisoft Solutions Ensured zero downtown for Travelliance's 7M users, with around-the clock support.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card >
                            <CardMedia style={{ height: '35vh', width: '500px', backgroundColor: 'white', margin: '30px 45px' }}>
                                <img src='/Media/sliderimg11.png' />
                            </CardMedia>
                            <CardContent style={{ backgroundColor: '#223554', color: 'white' }}>
                                <Typography style={{ fontSize: 'larger', padding: '5px' }} variant="body2">
                                    Arbisoft Solutions Ensured zero downtown for Travelliance's 7M users, with around-the clock support.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card >
                            <CardMedia style={{ height: '35vh', width: '500px', backgroundColor: 'white', margin: '30px 45px' }}>
                                <img src='/Media/sliderimg5.png' />
                            </CardMedia>
                            <CardContent style={{ backgroundColor: '#223554', color: 'white' }}>
                                <Typography style={{ fontSize: 'larger', padding: '5px' }} variant="body2">
                                    Arbisoft Solutions Ensured zero downtown for Travelliance's 7M users, with around-the clock support.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ArrowBackIcon className='icons' />
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ArrowForwardIcon className='icons' />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
                <Button onMouseEnter={handleHover} onMouseLeave={handleLeave} style={buttonStyle} variant="contained">View Our Work&nbsp;&nbsp;&nbsp;<NavigateNextIcon /></Button>
            </div>
        </div>
    )
}

export default Carousel