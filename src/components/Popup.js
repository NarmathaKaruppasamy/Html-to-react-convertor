import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const Popup = (props) => {
  const {outputContent,handleOpen,handleClose}=props;

  return (
    <Modal classname="popup-model" open={handleOpen} onClose={handleClose} center>
         <h2>Validation Comments</h2>
         {
          (()=>{
              if(outputContent==='Valid HTML file'){
                return(
                  <p className='valid_message'>{outputContent}</p>
                )  
              }
              else{
                return(
                  <pre>
                     <p className='error_message'>{outputContent}</p>
                  </pre>
                 
                )  
              }
            }
          )()
          }  
    </Modal>
  );





};
 
export default Popup;