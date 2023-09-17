import './info.css'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import pc from '../media/Pie Chart.png'
import lp from '../media/Line Plot.png'

const Stats = () => {
    return (
        <Row className='stats'>
            <Col className='stats-left'>
                <div className='stats-left-content'>
                    <p className='stats-left-txt'>Weight distribution of different categories of waste generated.</p>
                    <FontAwesomeIcon className='stats-left-icon' icon={faLongArrowAltRight} />
                </div>
                    <img className='stats-left-img' src={lp} />
            </Col>
            <Col className='stats-right'>
                    <img className='stats-right-img' src={pc} />
                <div className='stats-right-content'>
                    <p className='stats-right-txt'>Trend of waste generated over the years 2010-2018 acc to weight and category</p>
                    <FontAwesomeIcon className='stats-right-icon' icon={faLongArrowAltLeft} />
                </div>
            </Col>
        </Row>
    )
}

export default Stats
