import React,{lazy,useState,useEffect} from 'react';
import { Container,Row,Col} from 'react-grid-system';
import axios from 'axios';

const FilterElements=(props)=>{

    const userData = [
        { name: "Radio", value: "radio" },
        { name: "Hyperlink", value: "a" },
        { name: "TextField", value: "text" },
        { name: "Table", value: "table" },
        { name: "Textarea", value: "textarea" },
        { name: "UnorderedList", value: "ul" },
        { name: "OrderedList", value: "ol" },
        { name: "DescriptionList", value: "dl" },
        { name: "Button", value: "button" },
        { name: "Dropdown", value: "select" },
        { name: "Label", value: "label" },
        { name: "Paragraph", value: "p" },
        { name: "CheckBox", value: "checkbox" },
        { name: "Date", value: "date" },
        { name: "Image", value: "img" },
        { name: "Heading", value: "h" },
        
      ];
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(userData);
    }, []);
    let checkedElements = [];
    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempUser = users.map((user) => {
                return { ...user, isChecked: checked };
            });
            setUsers(tempUser);
            // console.log(tempUser);
            tempUser.map((item) => {
                if (item.isChecked === true) {
                    checkedElements.push(item.value);
                }
            });
        } else {
            let tempUser = users.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );

            setUsers(tempUser);
            // console.log("tem", tempUser);
            tempUser.map((item) => {
            if (item.isChecked === true) {
                checkedElements.push(item.value);
            }
            });
        }
        props.storeCheckedTags(checkedElements);
    };
   
    return(
        <Container>
            <Row className="justify-content-md-center">
                    <Col style={{textAlign:'center',marginBottom:'0rem'}}>
                        <div className='check1'>
                        <p className="checkbox-content">Select the html elements that you want convert into components</p>
                        <label className="check-label">All Select 
                        <input type="checkbox"
                        className="mark"
                        name="allSelect"
                        // checked={
                        //   users.filter((user) => user?.isChecked !== true).length < 1
                        // }
                        checked={!users.some((user) => user?.isChecked !== true)}
                        onChange={handleChange}
                        /><span class="mark"></span></label>
                        </div>
                    </Col>
            </Row>
            <Row>
                <>
                {users.map((user, index) => {
                                    return(
                                        <Col md={2}>
                                            <div style={{marginTop:'1rem'}}>
                                                <label className="check-label">{user.name}
                                                <input
                                                    type="checkbox"
                                                    className='mark'
                                                    name={user.name}
                                                    checked={user?.isChecked || false}
                                                    onChange={handleChange}
                                                /><span class="mark"></span></label>
                                            </div>
                                        </Col>
                                    )
                        })
                }
                </>
                </Row>
                {/* <Row>
                    <button onClick={handleClick}>Submit</button>
                    
                </Row> */}
                {/* <Row style={{marginTop:'1rem'}}>
                    <Col style={{textAlign:'center'}}>
                       
                    </Col>
                </Row> */}
        </Container>

    )
}
export default FilterElements;