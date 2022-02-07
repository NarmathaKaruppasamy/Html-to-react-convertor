import {fromJS} from 'immutable';
export const initialState= fromJS([{
    token:"",
    nameArray:"",
    resultArray:"",
    contentArray:"",
    downloadData:'',
    downloadurl:''
}])

const globalReducer = (state=initialState, action) => {
        switch(action.type){
            case 'GET_TOKEN':
                return{
                  ...state,
                  'token':action.response
                }
            case 'NAME_ARRAY': 
                return{
                    ...state,
                    'nameArray':action.response
                }
            case 'RESULT_ARRAY': 
                return{
                    ...state,
                    'resultArray':action.response
                } 
            case 'SELECTED_FILES': 
                return{
                    ...state,
                    'selectedFiles':action.response
                } 
            case 'EMPTY_FILES': 
                return{
                    ...state,
                    'emptyFiles':action.response
                } 
            case 'CONTENT_ARRAY': 
                return{
                    ...state,
                    'contentArray':action.response
                }
            case 'FILES_COUNT': 
                return{
                    ...state,
                    'filesCount':action.response
                } 
            case 'HTML_COUNT': 
                return{
                    ...state,
                    'htmlCount':action.response
                } 
            case 'UPLOAD_RESPONSE': 
                return{
                    ...state,
                    'uploadApiResponse':action.response
                } 
            case 'DOWNLOAD_DATA': 
                return{
                    ...state,
                    'downloadData':action.response
                }
            case 'CHECKED_TAGS': 
                return{
                    ...state,
                    'checkedElements':action.response
                }
            case 'FILE_URL': 
                return{
                    ...state,
                    'fileUrl':action.response
                }
            case 'VALID_HTML': 
                return{
                    ...state,
                    'validHtmlCount':action.response
                }
            case 'REMOVE_URL':
                const url=action.response;
                console.log(url);
                var s=[];
                s.push(state);
                console.log(s);
                return {
                    ...s.filter(item=>item.id!==url)
                }  
            default: 
                return state;
        }
 }        

       
            
        

 
 export default globalReducer; 
 