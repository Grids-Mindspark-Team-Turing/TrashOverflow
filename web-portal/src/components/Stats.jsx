import './stats.css'
import { Row, Col } from 'react-bootstrap'
import React from 'react'
import pc from '../media/Pie Chart.png'
import lp from '../media/Line Plot.png'

const Stats = () => {
    return (
        <Row className='stats'>
            <Col className='stats-col'>
                <img className='stats-col-img' src={lp} style={{ width: "600px" }} />
                <p className='stats-col-txt'>Weight distribution of different categories of waste generated.</p>
            </Col>
            <Col className='stats-col'>
                <img className='stats-col-img' src={pc} style={{ width: "600px" }} />
                <p className='stats-col-txt'>Trend of waste generated over the years 2010-2018 acc to weight and category</p>
            </Col>
        </Row>
    )
}

export default Stats
