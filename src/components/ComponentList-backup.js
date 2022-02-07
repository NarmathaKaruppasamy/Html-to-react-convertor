import React from 'react';
import { Container,Row,Col } from 'react-grid-system';
const ComponentList =()=>{
    return(
        <>
        <div className='component-list'>
            React Components are available for below html elements
        </div>
        <Container>
            <Row>
                <Col style={{textAlign:'center'}}>
                    <div class="cartoon">
                        <div class="bubble b r hb">
                            Button
                        </div>
                    </div>
                </Col>
                <Col>
                <div class='l-quote quote'>
                    <blockquote>
                        <p>Radio</p>
                    </blockquote>
                </div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div class="bubble1 bubble-bottom-left">Label</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div class="thought">Unordered List</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="cloud">Checkbox</div>
                </Col>
            </Row>
            <Row style={{marginTop:'5rem'}}>
                <Col style={{textAlign:'center'}}>
                    <div className="cloud">Paragraph</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div class="thought">Ordered List</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div>
	                    <div class="bubble-arrow">Textarea</div>
	                    <div class="pointer-arrow"></div>
                    </div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div class="cartoon">
                        <div class="bubble b r hb">
                            Label
                        </div>
                    </div>
                </Col>
                <Col>
                <div class='l-quote quote'>
                    <blockquote>
                        <p>Image</p>
                    </blockquote>
                </div>
                </Col>
            </Row>
            <Row style={{marginTop:'5rem'}}>
                <Col style={{textAlign:'center'}}>
                    <div class="bubble1 bubble-bottom-left">Hyperlink</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div class="cartoon">
                        <div class="bubble b r hb">
                            Text Field
                        </div>
                    </div>
                </Col>
                <Col style={{textAlign:'center'}}>
                <div class='l-quote quote'>
                    <blockquote>
                        <p>Radio</p>
                    </blockquote>
                </div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="cloud">Dropdown</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div class="thought">Description List</div>
                </Col>

            </Row>
            
        </Container>
        {/*<ul>
         <li>Button</li>
        <li>Hyperlinks</li>
        <li>Paragraph</li>
        <li>Dropdown</li>
        <li>Ordered List</li>
        <li>Unordered List</li>
        <li>Description List</li>
        <li>Checkbox</li>
        <li>Textarea</li>
        <li>Label</li>
        <li>Text field</li>
        <li>Radio</li>
        <li>Div(if it has the custom attribute data-component)</li> 
        <ul>*/}
        
      </>
    )
}
export default ComponentList;