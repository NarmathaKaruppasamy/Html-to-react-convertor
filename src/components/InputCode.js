import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-grid-system';
import { useAlert } from 'react-alert';
const InputCode =(props)=>{

    const{resultArray,contentArray,nameArray,filesCount,htmlCount,token,emptyFiles}=props;
    const[body,setBody]=useState('');
    const[pasteItem,setPasteItem]=useState(false);
    const alert = useAlert();
    useEffect(() => {
        if(token===undefined){
            props.getToken();
        }
    }, [props,token])
    const[emptyCount,setEmptyCount]=React.useState(0);
    const[array,setArray]=useState([]);
   
    const handleOnChange=()=>{
        console.log('file content',body);
        console.log(body.includes('<!DOCTYPE html>'));
        if(body.includes('<!DOCTYPE html>')===true){
            const myFile = new File([body.toString()], "contentfile.html", {
                type:"text/html",
            });
            console.log(myFile);
            let name=[];
            name.push('contentfile.html');
            console.log('filename',name);
            props.storeNameArray(name);
    
            let valueArray=[];
            valueArray.push(body);
            console.log('content array',valueArray);
            props.storeContentArray(valueArray);
    
            let fileArray=[];
            fileArray.push(myFile);
            console.log('formArray',fileArray);
            props.storeSelectedFiles(fileArray);
    
            const count=1;
            console.log('htmlcount',count);
            props.storeHtmlCount(count);
    
            let emptyFile=[];
            props.storeEmptyFiles(emptyFile); 
    
            setPasteItem(!pasteItem);
        }
        else{
            alert.show('It should be a HTML content');
            return false;
        }
           }
    const changeHandler=(e)=>{
        e.preventDefault();
        var files=e.target.files;
        console.log(files[0]);
        props.storeFilesCount(files.length);
        var sum=0;
        var formArray=[];
        var newArray=[];
        var emptyFileArray=[];
        var newContent;
        var fileName=[];  
        for(let i=0;i<files.length;i++){
            const fsize = files[i].size;
            sum += Math.round((fsize / 1024));
        }
        // if(sum>1){
        //     alert("File size is large");
        //     return false;
        // }
        // console.log('file 1 size',files.item(1).size);
        console.log('file size',sum,'kb');
        console.log('filesss',files);
        console.log('length',files.length);
        
        let htmlCount=0;
       
        var emptyFileCount=0;
        for(let i=0;i<files.length;i++){
            let reader=new FileReader();
            reader.readAsText(files[i]);
            if(files[i].name.endsWith('.html') || files[i].name.endsWith('.htm')){
                //eslint-disable-next-line no-loop-func
                htmlCount++;
                // eslint-disable-next-line no-loop-func
                reader.onload=(e)=>{
                    if(e.target.result===""){
                        console.log(e.target.result);
                        emptyFileArray.push(files[i].name);
                        emptyFileCount++;
                        console.log(emptyFileCount);
                        setEmptyCount(emptyFileCount);
                        if(files.length===1){
                            alert.show('Can not validate the empty file '+files[i].name);  
                        }
                        return false; 
                    }
                    if(files[i].name.endsWith('.html')||files[i].name.endsWith('.htm')){
                        newContent=e.target.result;
                        fileName.push(files[i].name);
                        newArray.push(newContent);
                        formArray.push(files[i]);
                    }
                } 
            }
            else{
                if(files.length===1){
                    alert.show('HTML and HTM files only acceptable');
                }        
            }
        } 
        console.log(htmlCount);
        console.log(emptyFileCount);
        console.log(emptyCount);
        if(htmlCount===emptyFileArray.length){
            console.log("with if");
            alert.show(`Can not validate the empty files ${emptyFileArray}`);
            return false;
        }
        console.log('formArray',formArray);
        props.storeSelectedFiles(formArray);
        console.log('htmlcount',htmlCount);
        props.storeHtmlCount(htmlCount);
        console.log('content array',newArray);
        props.storeContentArray(newArray);
        console.log('filename',fileName);
        props.storeNameArray(fileName);
        setArray(fileName);
        console.log(array);
        console.log('emptyfiles',emptyFileArray);
        console.log(emptyFileArray.length);
        props.storeEmptyFiles(emptyFileArray); 
        console.log('emptyfilescount',emptyFileCount);
        //console.log('emptyCount',emptyCount);
    };

    const validSubmit=()=>{
            let resArray=[];
            console.log(emptyCount);
            if(resultArray===undefined){
                axios.post('/api', {
                    fileData: contentArray
                  })
                  .then(function (response) {
                    const len=response.data.message.length;
                    for(let i=0;i<len;i++){
                        resArray.push(response.data.message[i]);
                    }
                    console.log('resultArray',resArray);
                    props.storeResultArray(resArray);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });   

            }
            props.history.push('/status');  
    };
    // const handleChange=(array)=>{
    //     setArray(array);
    //     console.log(array);
    // }
    return(
        <Container className='input'>
            <Row>
            {/* <section className='headline'> */}
                <Col></Col>
                <Col style={{textAlign:'center'}}>
                    <heading className='input_title'>Paste the HTML content</heading>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col style={{textAlign:'center'}}>
                    {/* <textarea className='textArea' cols="170" rows="17" type="text" 
                    value={nameArray} ref={nameArray}>
                        {nameArray}
                    </textarea>  */}
                    <textarea className='textArea' cols="170" rows="17" required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}></textarea>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col style={{textAlign:'center'}}>
                <div>
                    <button className='setcontent' onClick={handleOnChange}>Submit</button>
                </div> 
                </Col>
                <Col>
                </Col>
            </Row>
            <Row >
                {/* <div class='wrapper'> */}
                    <Col xs={12} sm={12} md={12} lg={4} style={{textAlign:'center'}}>
                        <label className='file_text'>Select Single/Multiple Files</label>
                        <input type='file' disabled={contentArray} className='file-button' accept=".html" 
                        id='selectfile' name='file' onChange={(e)=>changeHandler(e)} multiple/>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} style={{textAlign:'center'}}>
                    <div className='or_text'>
                        <h3>Or</h3>
                    </div>
                    </Col>
                    <Col xs={12} sm={12}  md={12} lg={4} style={{textAlign:'center'}}>
                        <label className='file_text'>Select Folder</label>
                        <input className='file-button' disabled ={contentArray}  directory="" webkitdirectory="" 
                        type="file" onChange={(e)=>changeHandler(e)}/> 
                    </Col>
                {/* </div> */}
            </Row>
            <Row className="justify-content-md-center">
                <Col lg={8}>
                </Col>
                <Col  xs={12} sm={12}  md={12} lg={4} style={{textAlign:'center',marginBottom:'1rem'}}>
                {htmlCount!==filesCount && htmlCount!==0 && body==="" &&
                <label className='count-show' value={`Out of ${filesCount} files , ${htmlCount} HTML files are selected`}>
                    {`Out of ${filesCount} files , ${htmlCount} HTML files are selected`}
                </label>}

                {htmlCount!==undefined && filesCount!==undefined && htmlCount!==1 && htmlCount===filesCount && htmlCount!==emptyFiles.length && body==="" &&
                <label className='count-show' value={`${htmlCount} HTML files are selected`}>
                    {`${htmlCount} HTML files are selected`}
                </label>}

                {htmlCount!==undefined && filesCount!==undefined && emptyFiles.length!==undefined && htmlCount===1 && htmlCount!==emptyFiles.length && body==="" &&
                <>
                <label className='count-show' value={`${htmlCount} HTML file is selected`}>
                    {`${htmlCount} HTML file is selected`}
                </label> 
                </>}

                {htmlCount===0 && body==="" && <label className='count-show' value={`Out of ${filesCount} files , ${htmlCount} HTML files are selected`}>
                    {`Out of ${filesCount} files , ${htmlCount} HTML file is selected`}
                </label> }

                {body!=="" && pasteItem===true &&
                <label className='count-show' value="HTML content is ready to validate">
                    HTML content is ready to validate
                </label>}
            
                </Col>
            </Row>
            <Row>
                {/* <section className='validation'>     */}
                    {htmlCount> 0 && htmlCount!==emptyCount && body===""?
                    <>
                        <Col xs={12} sm={12}  md={12} lg={4} style={{textAlign:'center'}}>
                            <label className='validate_text'>File Uploaded Successfully,lets validate uploaded files</label>
                        </Col>
                        <Col>
                        </Col>
                        <Col xs={12} sm={12}  md={12} lg={4} style={{textAlign:'center'}}>
                            <button className='valid-button' onClick={validSubmit}>Validate</button>   
                        </Col>    
                        
                    </>:<label></label>}

                    {body!=="" && pasteItem===true ?
                    <>
                        <Col xs={12} sm={12}  md={12} lg={4} style={{textAlign:'center'}}>
                            <label className='validate_text'>Let's validate the given HTML Content</label>
                        </Col>
                        <Col>
                        </Col>
                        <Col xs={12} sm={12}  md={12} lg={4} style={{textAlign:'center'}}>
                            <button className='valid-button' onClick={validSubmit}>Validate</button>   
                        </Col>    
                    </>:<label></label>}

                {/* </section> */}
            </Row>
                
        </Container>

    );
}
export default InputCode;
