import React,{useState} from 'react';
import { Container, Row, Col } from 'react-grid-system';
// import {Link} from 'react-router-dom';
// import nprofile from '../assets/images/narmatha-profile.png';
// // import sample from '../assets/sample';
// import JSZip from 'jszip';
// import saveAs from 'file-saver';
// import sample from '../assets/sample.zip'
// import axios from 'axios';
import ApiService from './ApiService';

const FinalOutput=(props)=>{

    const{downloadData}=props;

    const[body,setBody]=useState('');
    const[message,setMessage]=useState('');
    const handleDownload=(body)=>{
        console.log(body);
        if(body !==''){
            ApiService.download(body)
            .then(res => {
                 console.log(res);
                 console.log(res.status);
                    const url=`http://localhost:8345/api/v1/download/${body}`
                    props.storeDownloadData(url);
                 
            })
            .catch(error=>{
                console.log(error);
                setMessage('error');
                console.log(message);
                props.deleteDownloadData(downloadData);
            })
        }
    }
    const handleError=()=>{
        props.history.push('/error');
    }
    return(
        <Container className='con'>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <div className='final-output'>
                        <h2>Get React Component</h2>
                        <p>Paste the Valid Id to download the components</p>
                        <textarea className='IdPasteTextArea' cols="50" rows="1"
                            value={body}
                            onChange={(e)=>setBody(e.target.value)}>
                        </textarea>
                        {handleDownload(body)}
                     </div>
                </Col>
            </Row>
            
            <Row className="justify-content-md-center">
                <Col style={{textAlign:'center'}}>
                    {/* <button className='download-button' onClick={handleClick}>Download</button> */}
                    {
                        downloadData ?
                        <a href={downloadData} download="react-component"><button className='download-button'>Download</button></a>
                        :<button className='download-button' onClick={handleError}>Download</button>
                    }        
                </Col> 
            </Row>

            
        </Container>
    )
}
export default FinalOutput;