import React from 'react';

const ProgressBar=(props)=>{
    const{fileNameArr,htmlFile}=props;
    var count=0;
    return (
        <section className='progress_class'>
        
        {
            fileNameArr.map((item,index)=>{
                var div=htmlFile-index;
                var upper=100-count;
                count=(upper/div)+count;
                return(
                    (() => {
                        if(index+1 <= htmlFile ) {
                            return (
                                <>
                                <h3>{item}</h3>
                                <div className='progress'>
                                    <div className='progress_fill' style={{width:count}}>
                                        <span className='progress_text'>{count.toString().split(".")[0]}%</span>
                                        
                                    </div>
                                </div> 
                                </>
                            )
                        }
                        
                        // else {
                        //     return (
                        //         <div>    
                                      
                        //         </div>
                        //     )
                        // }   
                        
                    })() 
                );
             
            }

            )  
    }
     <p> All the selected html files are validated,</p> 
    </section>
    );
}
export default ProgressBar;