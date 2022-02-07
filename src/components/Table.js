import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Popup from './Popup';
import { Container,Row,Col} from 'react-grid-system';
//import Table from 'react-bootstrap';
const Table =(props)=>{
     //TODO
    //destructuring of props elements
    const resArr=props.resultArray;
    const fileName=props.fileNameArray;
    const [isOpen, setIsOpen] = useState(false);
    const[output,setOutput]=useState(null);

    const[currentPage,setCurrentPage]=useState(1);
    const[itemsPerPage,setItemsPerPage]=useState(4);

    const[pageNumberLimit,setPageNumberLimit]=useState(2);
    const[maxPageNumberLimit,setMaxPageNumberLimit]=useState(2);
    const[minPageNumberLimit,setMinPageNumberLimit]=useState(1);

    
    const handleClick=(event)=>{
        setCurrentPage(Number(event.target.id));
    }
    const pages=[];
    for(let i=1;i<=Math.ceil(resArr.length/itemsPerPage);i++){
        pages.push(i);
    }

    const indexOfLastItem=currentPage*itemsPerPage;
    const indexofFirstItem=indexOfLastItem-itemsPerPage;
    const currentItems=resArr.slice(indexofFirstItem,indexOfLastItem);
    const renderPageNumbers=pages.map((number)=>{
        
        if(number<maxPageNumberLimit+1 && number>=minPageNumberLimit){
            return(
                <li key={number} id={number} onClick={handleClick} 
                className={currentPage===number ? 'active':null}>
                    {number}
                </li>
            );
        }
        else{
            return null;
        }
       
    });

    const toggleClose =()=>{
        setIsOpen(!isOpen);   
    }
    const togglePopup = (item) => {

        setIsOpen(!isOpen);
        setOutput(item);
    }
    const handleNextBtn=()=>{
        setCurrentPage(currentPage+1);
        if(currentPage+1>maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit+pageNumberLimit)
        }
    }

    const handlePrevBtn=()=>{
        setCurrentPage(currentPage-1);
        if((currentPage-1)%pageNumberLimit===0){
            setMaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit-pageNumberLimit);
        }
    }
        const renderData=(data,idx)=>{
        
        return(    
            <>   
                <table className='table'>
                    <tr className='tr'>
                        <th className='th'>S.No</th>    
                        <th className='th'>File Name</th>                                 
                        <th className='th'>Validation Status</th>
                        <th className='th'>Vadidation Comments</th>
                    </tr> 
                    
                {
                    data.map((item)=>{
                        return(
                            <>
                                    <tr  className='tr'>
                                        <td className='td'>{(idx++)+1}</td>
                                        <td className='td'>{fileName[idx-1]}</td>
                                        <td className='td'>
                                        {
                                            (() => {
                                                if(item === "Valid HTML file") {
                                                    return (
                                                        <FaCheck size={30} color='green'/>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <FaTimes size={30} color='red'/>  
                                                    )
                                                }
                                            })()
                                        }
                                        </td>
                                        <td className='td'>
                                            <input type="button" className="result-button" value="Click me" onClick={()=>togglePopup(item)}/>
                                            <Popup outputContent={output} handleClose={toggleClose} handleOpen={isOpen}/>
                                        </td>
                                    </tr>   
                            </>
                        )
                    })
                }
                 </table>
                </>
        )
    }
    return(
        // <Container className='tableoutput'>
        //     <Row className="justify-content-md-center">
        //         <Col style={{textAlign:'center'}}>
        <div className='tableoutput'> 
           
             {/* </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col sm={4} style={{textAlign:'center'}}>  */}
            {renderData(currentItems,indexofFirstItem)}
            <ul style={{textAlign:'center'}} className='pageNumbers'> 
                <li>
                    <button disabled={currentPage===pages[0] ? true : false} onClick={handlePrevBtn}>Prev</button>
                </li>
                    {renderPageNumbers} 
                <li>
                    <button disabled={currentPage===pages[pages.length-1] ? true : false} onClick={handleNextBtn}>Next</button>
                </li>
            </ul>
      {/* </Col> */}
         {/* </Row> */}
            
        </div> 
        // </Container>
    )

   
}
export default Table;