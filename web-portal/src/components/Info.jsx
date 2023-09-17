import React from 'react'
import './info.css'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacterium, faLandMineOn, faRecycle } from '@fortawesome/free-solid-svg-icons'

const Info = () => {
    return (
        <div className='info'>
            <center>
                <p className='info-start'>It is important to know the segregation of your trash. It takes years of processing to convert your trash into something useful, and your small contribution can save the environment.</p>
            </center>
            <Row className="info-row">
                <Col className="info-card">
                    <div className="info-icon-border"><FontAwesomeIcon icon={faBacterium} className="info-icon" size='2x' /></div>
                    <div className="info-h">Compost</div>
                    <div className="info-txt">
                    Food scraps, soiled paper, & yard trimmings go in the compost cart – this includes anything from coffee grounds and napkins, to spoiled foods and peels.
                    </div>
                </Col>
                <Col className="info-card">
                    <div className="info-icon-border"><FontAwesomeIcon icon={faRecycle} className="info-icon" size='2x' /></div>
                    <div className="info-h">Recycle</div>
                    <div className="info-txt">
                    Paper, cardboard, glass bottles, aluminum/tin cans, hard plastics, bundled plastic bags & thin (film) plastics go into the recyclables cart.
                    </div>
                </Col>
                <Col className="info-card">
                    <div className="info-icon-border"><FontAwesomeIcon icon={faLandMineOn} className="info-icon" size='2x' /></div>
                    <div className="info-h">Land Fill</div>
                    <div className="info-txt">
                    What is trash? Not much! Cat litter, ceramics, & broken glass to name a few.  Less of these items placed in the landfill cart the better.
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Info
