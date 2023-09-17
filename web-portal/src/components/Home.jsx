import { React, useState } from 'react'
import { Carousel, Button, Row, Col } from 'react-bootstrap'
import s1 from '../media/s1.png'
import s2 from '../media/s2.png'
import s3 from '../media/s3.png'
import a1 from '../media/a1.svg'
import a2 from '../media/a2.svg'
import './home.css'

const Home = () => {
    const [index, setIndex] = useState(1);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='home'>
            <Carousel activeIndex={index} onSelect={handleSelect} wrap={false} touch={true} interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={s1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='home-content-1'>
                        <h1 className='home-h-1'>You don't like that, right?</h1>
                        <p className='home-label-1'>Because, nobody does! Join us in our mission to keep our city clean.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={s2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <Row className='home-content-2'>
                            <Col className='home-content-2-1'>
                                <p>Slide left</p>
                                <img className="home-arrow" src={a1} />
                            </Col>
                            <Col className='home-content-2-2'>
                                <p className='home-content-2-2-h'>Choose your surrounding</p>
                                <p className='home-label-1'>If it's the trash can in front of your home, what are you going to choose?</p>
                            </Col>
                            <Col className='home-content-2-3'>
                                <p>Slide right</p>
                                <img className="home-arrow" src={a2} />
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={s3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='home-content-3'>
                        <h1 className='home-h-3'>This is it!</h1>
                        <p className='home-label-3'>We are just a few steps away to achieve this!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home
