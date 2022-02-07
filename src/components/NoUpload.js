import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
const NoUpload=()=>{
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <div className='error'>
                        Oops...No data is available for given ID
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col style={{textAlign:'center'}}>
                    <div>
                        <Link to='/getcomponent'><button className='back2_button'>Back</button></Link>
                    </div>  
                </Col>
            </Row>
        </Container>
        
    )
}
export default NoUpload;