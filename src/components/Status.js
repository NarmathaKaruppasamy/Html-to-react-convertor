import React, { useState,useEffect } from "react";
import ApiService from "./ApiService";
import axios from "axios";
import { useAlert } from 'react-alert';
import {useHistory} from "react-router-dom";

import Table from "./Table";
import { Container,Row,Col } from "react-grid-system";
import InputCode from '../container/InputCode';
let alertActive=true;
const Status =(props)=>{

     //TODO
    //destructuring of props elements
    const[isTable,setIsTable]=useState(false);
    const [outputArr,setOutputArr]=useState([]);
    const alert = useAlert();
    const history = useHistory();
    
  
    const handleClick=()=>{
        props.history.push('/');
    }
    
    const handleOutput=()=>{
        setIsTable(!isTable);
    }
    
    const executeFun=(props)=>{

        const fileNameArray=props.nameArray;
        const resultArray=props.resultArray;
        const selectedFile=props.selectedFiles;
        const emptyFiles=props.emptyFiles;
        const checkedElements=props.checkedElements;
       
        if(alertActive===true){
            if(emptyFiles.length!==0){
                alert.show('Can not validate the empty files '+emptyFiles);
            }
            alertActive=false;
        }
        // console.log(alertActive);
        // console.log('seleced files',selectedFile);
        // console.log('empty files',emptyFiles);
       // const{resultArray,fileNameArray,fileCount}=props;
        const htmlCount=props.htmlCount;
        const filesCount=props.filesCount;
        
        const handleSubmit=()=>{
            console.log('File',selectedFile);
            const formData=new FormData();
            const enableHtmlValidation=true;
            if(enableHtmlValidation===true){
                var resContent=[];
                setOutputArr(resContent);
                var validHtmlCount=0;
                for(let i=0;i<fileNameArray.length;i++){
                    if(resultArray[i]==="Valid HTML file"){
                
                        resContent.push(fileNameArray[i]);
                        validHtmlCount++;
                    }   
                }
                console.log('valid',validHtmlCount);
                props.storeValidHtml(validHtmlCount);
                console.log('res content',resContent);
                if(validHtmlCount===0){
                    alert.show('Nothing To Upload')
                    return false;
                }
                // else{
                //     alert.show(validHtmlCount+"/"+fileNameArray.length+ " Valid Html files are going to upload");
                // }
                for(let i=0;i<selectedFile.length;i++){
                    for(let j=0;j<resContent.length;j++){
    
                        if(resContent[j]===selectedFile[i].name){
                            console.log(selectedFile[i]);
                            formData.append('files', selectedFile[i])
                            //formData.append('files', new Blob([JSON.stringify(selectedFile[i])], { type: 'multipart/form-data'}));
                        }
                    }  
                }
            }
            else{
                // if(emptyFiles.length!==0){
                //     alert.show('Can not Upload the empty files '+emptyFiles);
                // }
                
                for(let i=0;i<selectedFile.length;i++){
                    formData.append('files', selectedFile[i])
                }
            } 

            axios.interceptors.request.use(function (config) {
                config.headers={
                    'Authorization':`Bearer ${props.token}`,
                    'Content-Type':'multipart/form-data',
                }
                return config;
              }, function (error) {
                return Promise.reject(error);
                });
            console.log(checkedElements);
            if(checkedElements!==undefined && checkedElements.length!==0)
            {
                const myFile = new File([checkedElements.toString()], "content.txt", {
                    type:"text/plain",
                });
                formData.append('files',myFile);
            }
            else
            {
                alert.show('You should select atlest one element for generate components');
                return false;
            }
            ApiService.upload(formData)
                .then(res => {
                        console.log(res);
                        props.setUploadResponse(res.data.uniquekey);
                })
            props.history.push('/result');
        }
        return(
            <Container className='status'>
                <Row>
                {/* <Row className="valid_result"> */}
                    <Col style={{textAlign:'center'}}>
                        {htmlCount===1 &&
                            <section className='validate_message'>{htmlCount} HTML file is processed!!!</section>
                        }
                        {htmlCount>1 &&
                            <section className='validate_message'>{htmlCount-emptyFiles.length}/{htmlCount} HTML files are processed!!!</section> 
                        }
                    </Col>
                </Row>
                    {/* <ProgressBar resultArr={resultArray} fileNameArr={fileNameArray}  htmlFile={fileCount} /> */}
                    {/* <button className='validres-button' onClick={handleOutput}>Validation Result</button> */}
                {/* {isTable && <Table resultArray={resultArray} fileNameArray={fileNameArray}/>} */}
                <Row>
                    <Col sm={4}>
                    </Col>
                    <Col sm={4} style={{textAlign:'center'}}>
                        {/* <section className='t'> */}
                            <Table resultArray={resultArray} fileNameArray={fileNameArray}/>
                        {/* </section> */}
                    </Col>
                </Row> 
                <Row>
                    <InputCode.FilterElements/>
                </Row>
                <Row className='lastrow'>
                    <Col md={4}>
                        <button className="back1_button" onClick={() => history.goBack()}>Back</button>
                    </Col>
                    <Col  md={4}>
                        <div className="status_message">Let's create react components for valid HTML files</div>
                    </Col>
                    <Col  md={4}>
                        <button className='upload_button' onClick={()=>handleSubmit()}>Continue</button>
                    </Col>  
                </Row>
            </Container>      
        )
    }
    return(
        <>
        {(props.resultArray && props.selectedFiles && props.nameArray) ? executeFun(props) : <div className='loading'>Loading....</div>} 
        </>   
    )
}
export default Status;