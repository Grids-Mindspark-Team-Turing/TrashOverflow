import { React, useState } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Home, Footer, Info, Stats, OverflowAlert } from '../src/components/index'
import { Link } from 'react-scroll';
import icon from './icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [show, setShow] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Container className="header-big">
            <span>
              <img src={icon} alt="logo" className="nav-icon" />
            </span>
            <span className='brand'>
              <span><span className='brand-1'>Trash</span><span className='brand-2'>Overflow</span></span>
            </span>
            <span className="nav-renders">
              <Link to="home" smooth={true} duration={500} className="nav-txt">
                Home
              </Link>
              <Link to="alert" smooth={true} duration={500} className="nav-txt">
                Overflow Alert
              </Link>
              <Link to="info" smooth={true} duration={500} className="nav-txt">
                Info
              </Link>
              <Link to="stats" smooth={true} duration={500} className="nav-txt">
                Stats
              </Link>
            </span>
          </Container>
          <Container className="header-small">
            <span className="icon-left">
              <img src={icon} alt="buzz-bee" className="nav-icon" />
            </span>
            <span className="icon-right" onClick={() => setShow(!show)}>
              <FontAwesomeIcon icon={faBars} size="xl" />
            </span>
            {show ? (
              <center>
                <br />
                <Link to="home" smooth={true} duration={500} className="nav-txt">
                  Home
                </Link>
                <Link to="alert" smooth={true} duration={500} className="nav-txt">
                  Overflow Alert
                </Link>
                <Link to="info" smooth={true} duration={500} className="nav-txt">
                  Info
                </Link>
                <Link to="stats" smooth={true} duration={500} className="nav-txt">
                  Stats
                </Link>
              </center>
            ) : null}
          </Container>
        </div>
        <Routes>
          <Route path="/" element={[<Home name="home" />, <OverflowAlert name="alert" />, <Info name="info" />, <Stats name="stats" />, <Footer />]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
