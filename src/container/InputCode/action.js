import ApiService from "../../components/ApiService";
export function getNewToken(){
    const data={
        username: 'verizon',
        password:'verizon'
       }
        return(dispatch) =>{
            ApiService.token(data)
            .then(res=>{
                console.log(res.data.token);
                dispatch({type: 'GET_TOKEN', response : res.data.token})
            }).catch(function (error) {
                console.log(error);
            });
        }
}

export function getNameArray(nameArray){
    return (dispatch)=>{
        dispatch({type:'NAME_ARRAY',response:nameArray})
    }

}
export function getResultArray(resultArray){
    return (dispatch)=>{
        dispatch({type:'RESULT_ARRAY',response:resultArray})
    }

}
export function getSelectedFiles(selectedFiles){
    return (dispatch)=>{
        dispatch({type:'SELECTED_FILES',response:selectedFiles})
    }

}
export function getEmptyFiles(emptyFiles){
    return (dispatch)=>{
        dispatch({type:'EMPTY_FILES',response:emptyFiles})
    }
}
export function getContentArray(contentArray){
    return (dispatch)=>{
        dispatch({type:'CONTENT_ARRAY',response:contentArray})
    }
}
export function getFilesCount(filesCount){
    return (dispatch)=>{
        dispatch({type:'FILES_COUNT',response:filesCount})
    }
}

export function getHtmlCount(htmlCount){
    return (dispatch)=>{
        dispatch({type:'HTML_COUNT',response:htmlCount})
    }
}
export function getUploadApiResponse(uploadApiResponse){
    return (dispatch)=>{
        dispatch({type:'UPLOAD_RESPONSE',response:uploadApiResponse})
    }
}
export function getDownloadData(downloadData){
    return (dispatch)=>{
        dispatch({type:'DOWNLOAD_DATA',response:downloadData})
    }
}
export function getCheckedTags(checkedElements){
    return (dispatch)=>{
        dispatch({type:'CHECKED_TAGS',response:checkedElements})
    }
}
export function getFileUrl(fileUrl){
    return (dispatch)=>{
        dispatch({type:'FILE_URL',response:fileUrl})
    }
}
export function getValidHtml(validHtmlCount){
    return (dispatch)=>{
        dispatch({type:'VALID_HTML',response:validHtmlCount})
    }
}

export function removeDownloadData(downloadurl){
    return (dispatch)=>{
        dispatch({type:'REMOVE_URL',response:downloadurl})
    }
}