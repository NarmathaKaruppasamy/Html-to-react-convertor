import React,{useState} from 'react';
import { Container,Row,Col } from 'react-grid-system';
const ComponentList =(props)=>{

    const htmlElements=['Button','Radio','CheckBox','Hyperlink','Paragraph','Dropdown',
    'Textarea','Label','TextField','Ordered List','Unordered List','Description List','Image'];

    const [checkedState, setCheckedState] = useState(
        new Array(htmlElements.length).fill(false)
    );
    const handleOnChange=(position)=>{
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }
    var checkedElements=[];
    const handleSubmit=()=>{
       
            for(let i=0;i<htmlElements.length;i++){
                if(checkedState[i]===true){
                    checkedElements.push(htmlElements[i]);
                }
            }
            console.log(checkedState);
            console.log(checkedElements);
            props.storeCheckedElements(checkedElements);
    }
    return(
        <>
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <div className='component-list'>
                        React Components are available for below html elements
                    </div>
                </Col>
            </Row>
            <Row className='list-firstrow'>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">Button</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">Paragraph</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">Hyperlink</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">Dropdown</div>
                </Col>
            </Row>
            <Row style={{marginTop:'3rem'}}>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">UL</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">Checkbox</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">Textarea</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">Label</div>
                </Col>
            </Row>
            <Row style={{marginTop:'3rem'}}>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">OL</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">TextField</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">Radio</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">DL</div>
                </Col>
            </Row>
            <Row style={{marginTop:'3rem'}}>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">Table</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">Heading</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">Image</div>
                </Col>
                <Col style={{textAlign:'center'}}>
                    <div className="thought">Date</div>
                </Col>
            </Row>
        </Container>
        
      </>
    )
}
export default ComponentList;