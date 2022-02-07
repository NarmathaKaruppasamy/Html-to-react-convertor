import React ,{useState,useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import processgif from '../assets/gifs/im-coming-on-the-way.gif'
import donegif from '../assets/gifs/mission-complete-spongebob.gif'
import ApiService from '../components/ApiService';
import { Container, Row, Col } from 'react-grid-system';
import { useAlert } from 'react-alert';
import {send_api_file} from '../constants/apiName';
const Result=(props)=> {
  const API_FILE = process.env.REACT_APP_API_FILE;
    const{downloadData,uploadApiResponse,validHtmlCount,nameArray}=props;
    const[isCopied,setIsCopied]=useState(false);
    const alert = useAlert();
    useEffect(()=>{
      if(uploadApiResponse!==undefined && downloadData===undefined){
        if(validHtmlCount===1){
          alert.show(validHtmlCount+"/"+nameArray.length+ " Valid Html file is uploaded")
        }
        else{
          alert.show(validHtmlCount+"/"+nameArray.length+ " Valid Html files are uploaded")
        }
      }
      if(uploadApiResponse!==undefined){
      const timeBreak=()=>{ 
        ApiService.download(uploadApiResponse)
        .then(res => {
             if(res.data!==""){
              const url=`${API_FILE}/download/${uploadApiResponse}`;
              props.storeDownloadData(url);
              clearTimeout(timeSet) 
             }  
        })
        .catch(error=>{
          console.log(error);
        })
      }
      let timeSet=setInterval
        (
          timeBreak,10000
        )
    }
    },[props, uploadApiResponse,])

    return (
      <Container className='con1'>
        {/* <Row className="justify-content-md-center">
        <Col md="auto" style={{textAlign:'center'}}> */}
        {downloadData ? 
        <>
        <Row className="justify-content-md-center">
            <Col>
              <h2 style={{ marginTop: '1rem' }}><center>Done!!!</center></h2>
            </Col>
        </Row>
        <Row>
          <Col>
            <img src={donegif} height={300} width={500} alt="completed,now download it" />
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col>
            <a href={downloadData} download="react-components"><button className='download-button1'>Download</button></a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ fontSize: '20px', fontWeight: '600', marginTop: '1rem' }}>  You can keep this id for your later usage and using this id you can get your corresponding component files at any time</p>
          </Col>
        </Row> 
        <Row>
          <Col></Col>
          <Col>
          <div className='completed'>
                  <textarea className='IdTextArea' cols="53" rows="1" value={uploadApiResponse}>
                    {uploadApiResponse ? <div>{uploadApiResponse}</div> : " "}
                  </textarea>
                  <CopyToClipboard text={uploadApiResponse} onCopy={() => setIsCopied(true)}>
                    <button className='copy_button'>Copy To clipboard</button>
                  </CopyToClipboard>
                </div>
          </Col>
          <Col>
            <div className='IdCopy'>
              {isCopied && uploadApiResponse ? <p className='idCopied'>Id Copied</p> : " "}
            </div>
          </Col>
        </Row> 
        </> :
        <>
        <Row className="justify-content-md-center">
          <Col>
            <p style={{marginTop:'1rem',fontSize:'22px',fontWeight:'550'}}>  Files are uploaded successfully!!</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <p style={{marginTop:'2rem',fontSize:'22px'}}>  Now html files are converting into react components,</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <img src={processgif} height={300} width={500} alt="let's wait,it will be come soon"/>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <p style={{fontSize:'21px',fontWeight:'600',marginTop:'2rem'}}>  lets, wait for few minutes to get components or take the id then comeback and using this id get your corresponding components </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{marginTop:'1.5rem'}}>
          <Col></Col>
          <Col className='IdText'>
          <div className='completed'>
                  <textarea className='IdTextArea' cols="53" rows="1" value={uploadApiResponse}>
                    {uploadApiResponse ? <div>{uploadApiResponse}</div> : " "}
                  </textarea>
                  <CopyToClipboard text={uploadApiResponse} onCopy={() => setIsCopied(true)}>
                    <button className='copy_button'>Copy To clipboard</button>
                  </CopyToClipboard>
                </div>
          </Col>
          <Col>
            <div className='IdCopy'>
              {isCopied && uploadApiResponse ? <p className='idCopied'>Id Copied</p>: " "}
            </div>
          </Col>
        </Row>
        </>}
      </Container>
    );
  }
export default Result;