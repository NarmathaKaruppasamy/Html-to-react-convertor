import React from 'react'
import hprofile from '../assets/images/hrishant-profile.png';
import nprofile from '../assets/images/narmatha-profile.png';
import pprofile from '../assets/images/pushkar-profile.png';
import {Link} from 'react-router-dom';
import { Container,Row,Col } from 'react-grid-system';
import { IoIosMail } from 'react-icons/io';

const AboutUs =()=>{
    return(
        <>
      <div className='our_team'>
        <h1>Our Team</h1>
      </div>
      <Container>
        <Row>
        {/* <div className="row"> */}
      <Col>
        {/* <div className="column"> */}
          <div className="card">
            <img src={hprofile} alt="Jane" className='images'  />
            <div className="container">
              <h2>Hrishant Raj</h2>
              <p className="title2">Associate Software Development Engineer</p>
              {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
              <p>hrishant.raj@publicissapient.com</p>
            </div>
          </div>
        {/* </div> */}
        </Col>
        <Col>
        {/* <div className="column"> */}
          <div className="card">
            <img src={nprofile} alt="Mike" className='images' />
            <div className="container">
              <h2>Narmatha Karuppasamy</h2>
              <p className="title2">Associate Software Development Engineer</p>
              <p className='quote'>As a front-end developer ,she leads the frontend strategy of this module.she loves pushing boundaries to create a better outcome.</p>
              <p className='email'><IoIosMail size={25}/> narmatha.karuppasamy@publicissapient.com</p>
            </div>
          </div>
        {/* </div> */}
        </Col>
        <Col>
        {/* <div className="column"> */}
          <div className="card">
            <img src={pprofile} alt="John" className='images'  />
            <div className="container">
              <h2>Pushkar Singh</h2>
              <p className="title2">Associate Software Development Engineer</p>
              {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
              <p>pushkar.singh@publicissapient.com</p>
            </div>
          </div>
        {/* </div> */}
        </Col>
      {/* </div> */}
      </Row>
      </Container>
      {/* <div className="row">
        <div className="container">
          <Link to='/' className='ourteam_link'>Back</Link>
        </div>
      </div> */}
     
      </>
    )
}
export default AboutUs;