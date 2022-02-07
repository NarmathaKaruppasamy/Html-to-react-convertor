import React, { useState } from 'react';
import axios from 'axios';
import Status from './Status';
import UseApiCall from './UseApiCall';
import{Link} from 'react-router-dom';
import { useAlert } from 'react-alert';
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import { FaSync } from 'react-icons/fa';
import ApiService from './ApiService';

//import updateResponseToStore from './src/redux/action/index'
const InputCode =()=>{

    
    const[selectedFile,setSelectedFile]=useState([]);
    var formArray=[];

    const[formFileArr,setFormFileArr]=useState();
    const[content,setContent]=useState("html code");
    const[arr,setArr]=useState([])
    const[isFilePicked,setIsFilePicked]=useState(false);
    const[count,setCount]=useState(0);
    const [data, setData] = React.useState(null);
    const [htmlfile,setHtmlfile]=React.useState(0);
    const [emptyFileArr,setEmptyFileArr]=React.useState([]);
    var emptyFileArray=[];

    const[tot,setTot]=useState(0);
    const[disable,setDisable]=useState(true)
    const[uploadDisable,setUploadDisable]=useState(false)
    const[token,setToken]=useState()
    const[validOn,setValidOn]=useState(true);
    const[uploadOn,setUploadOn]=useState(true);

    
    const[ isValid,setIsValid]=useState(false)
    var newContent;
    var newArray=[];
    var resArray=[];
    var fileName=[];
    const[resArr,setResArr]=useState([]);
    const[fileNameArr,setFileNameArr]=useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const[folderSelect,setFolderSelect]=useState(false);
    

    const[ folder,setFolder]=useState(false)
    const[fileSelect,setFileSelect]=useState(false);
    
    const[output,setOutput]=useState(null);
    const[buttonName,setButtonName]=useState();
    const[selFile,setSelFile]=useState();

    const toggleClose =()=>{
        setIsOpen(!isOpen);   
    }
    const togglePopup = (item) => {
        setIsOpen(!isOpen);
        setOutput(item);
    }
    const alert = useAlert();
    
    const changeHandler=(e)=>{

        setFolder(true);
       
       // setSelectedFile(e.target.files);
        //console.log(e.target.files);

        let files=e.target.files;
        console.log('filesss',files);
        console.log('length',files.length);
        console.log('files[0]',files[0]);
        setSelFile(files[0]);
        setFormFileArr(files)
        for(let i=0;i<files.length;i++){
            let reader=new FileReader();
            const data=reader.readAsText(files[i]);
            console.log(data);
            if(files[i].name.endsWith('.html') || files[i].name.endsWith('.htm')){
                //console.log(files[i].result);
                reader.onload=(e)=>{
                    if(e.target.result===""){
                        console.log(e.target.result);
                        setEmptyFileArr(emptyFileArray);
                        emptyFileArray.push(files[i].name)
                        // alert.show('Can not validate the empty file '+files[i].name);
                        return false;
                         
                     }
                    setContent(e.target.result);
                    if(files[i].name.endsWith('.html')||files[i].name.endsWith('.htm')){
        
                        newContent=e.target.result;
                        setFileNameArr(fileName);
                        fileName.push(files[i].name);
                        //console.log('File Name:',files[i].name);
                        //console.log('target',newContent);
                        setArr(newArray);
                        newArray.push(newContent);
                        setIsFilePicked(true);
                        setHtmlfile(htmlfile+1)
                        setDisable(false);
                        setSelectedFile(formArray);
                        formArray.push(files[i]);
                        
        
                    }
                    //formData.append('file', e.target.files[i]);
                   //console.log(formData);
                    setFileSelect(true);
                    

            }
          
          
           
   
            }

        }


        
       
       
        //It take all html files
        // setSelectedFile(formArray);
        // formArray.push(e.target.files[i]);
      
        console.log('Count',count);
        
    };
    
    
    const changeHandlerFolder=(e)=>{

        //setSelectedFile(e.target.files);
        setFileSelect(true);
        let files=e.target.files;

        var total=files.length;
     
        var html=0;
        setTot(total);
        for(let i=0;i<total;i++){
            if(files[i].name.endsWith('.html') || files[i].name.endsWith('.htm')){
              
                //console.log(files[i]);
                html++;
                
                //setSelectedFile(files[i]);
                changeHandler(e);
                
            }
        }  
        console.log(html);
        setHtmlfile(html);
        console.log(htmlfile);
        setFolderSelect(true);
        
       
    };
    const validSubmit=()=>{

            if(emptyFileArr.length!=0){
                alert.show('Can not validate the empty files '+emptyFileArr);
            }
            console.log('valid count',htmlfile);        
            console.log('files',fileNameArr);
            console.log('input array content',arr);
            // const resOutput=UseApiCall('/api',arr);
            // console.log('data from api',resOutput);
            
            setIsValid(true);
            axios.post('/api', {
                fileData: arr
              })
              .then(function (response) {
                const len=response.data.message.length;
                //setCount(len);
                // console.log(response.data.message);
                // console.log('response',response);
                setResArr(resArray);

                for(let i=0;i<len;i++){

                    resArray.push(response.data.message[i]);
                }
                setData(response.data.message)
              })
    
              .catch(function (error) {
                console.log(error);
              });   
             
        
    };
    const [outputArr,setOutputArr]=useState([]);
    const [isUpload,setIsUpload]=useState(false)
    const handleSubmit=()=>{

        console.log('File',selectedFile);
        console.log('update file',selFile);
        
        var resContent=[];
        setOutputArr(resContent);
        var htmlCount=0;
        for(let i=0;i<fileNameArr.length;i++){
            if(resArr[i]==="Valid HTML file"){
            
            resContent.push(fileNameArr[i]);
            htmlCount++;
            }
        }
        console.log('res content',resContent);
        if(htmlCount===0){
            alert.show('Nothing To Upload');
            setIsUpload(true);
        }
        else{
            alert.show(htmlCount+"/"+fileNameArr.length+ " Valid Html files are uploaded");
        }
        //const finalArray=[];
        const formData = new FormData();
        for(let i=0;i<selectedFile.length;i++){
            for(let j=0;j<resContent.length;j++){

                if(resContent[j]===selectedFile[i].name){
                    //finalArray.push(selectedFile[i]);
                    console.log(selectedFile[i]);
                    formData.append('files', selectedFile[i])
                }
            }  
        }
        // const formData = new FormData();
        // for(let i = 0; i< selectedFile.length; i++) {
        //     formData.append('files', selectedFile[i])
        // }
        //formData.append('files', selFile);
         ApiService.upload(formData)
            .then(res => {
                    console.log(res.data);
                    //alert("File uploaded successfullyyyy.")
            })
        
    };
    
    return(
        <div className='input'>
        <main>
            {/* <section className='input-container'> */}
            <h2 ><center>Source Code</center></h2>
            
                <textarea className='textArea' cols="140" rows="15" value= {arr} onChange={()=>setArr()}>

                </textarea>

                <div class='wrapper'>
                    <div>
                        <label className='file_text'>Select File</label>
                        <input type='file' disabled={fileSelect} className='file-button' accept=".html" 
                        id='selectfile' name='file' onChange={(e)=>changeHandler(e)} multiple/>
                    </div>
                    <div className='or_text'>
                        <h3>Or</h3>
                    </div>
                    <div className='folder_part'>
                        <label className='file_text'>Select Folder</label>
                        <input className='file-button' disabled ={folder} directory="" webkitdirectory="" 
                        type="file" onChange={(e)=>changeHandler(e)}/>
                    </div>
                </div>
                {folderSelect && <label className='count-show' value={`Out of ${tot} files , ${fileNameArr.length} HTML files selected`} 
                onChange={()=>setFileNameArr()}>{`Out of ${tot} files , ${fileNameArr.length} HTML files selected`}</label>}
                <section className='validation'>    
                    {htmlfile> 0 && 
                    <>
                        <label className='validate_text'>File Uploaded Successfully,lets validate uploaded files</label>
                        {validOn && <button className='valid-button' disabled={disable} onClick={validSubmit}>Validate</button>}
                    </>}
                </section>
                    {isValid &&
                        <Status resultArray={resArr} fileNameArray={fileNameArr} fileCount={fileNameArr.length}/>
                    }
            

                {/* {resArr.map((item,index)=>{
                        return(
                            <>                               
                            <h3>{fileNameArr[index]} :</h3>
                            {
                                (() => {
                                        if(item === "Valid HTML file") {
                                            return (
                                                <>
                                                    <input type="button" className="result-button" value="Valid Html" onClick={()=>togglePopup(item)}/>
                                                    <FaCheck size={30}/>
                                                </>
                                            )
                                        } */}
                                         {/* else {
                                            return (
                                                <>
                                                    <input type="button" className="wrong-button" value="Invalid Html" onClick={()=>togglePopup(item)}/>
                                                    <FaTimes size={30}/>    
                                                </>
                                            )
                                        }
                                })()  
                            }   
                            </>
                        )
                })} */}
                
            {htmlfile> 0 &&<Link to='/result'> <button className='upload-button' disabled={isUpload} onClick={()=>handleSubmit()}>Upload</button></Link>}<br/>

                  
            
            {/* </section> */}
        </main>
        </div>

    );
}
export default InputCode;
