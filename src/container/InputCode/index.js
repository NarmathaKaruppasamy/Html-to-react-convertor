import { connect } from 'react-redux'
import InputCodeComponent from '../../components/InputCode'

import Status from '../../components/Status';
import Result from '../../components/Result';
import FinalOutput from '../../components/FinalOutput';
import FilterElements from '../../components/FilterElements';
import { getNewToken,getNameArray ,getResultArray,getSelectedFiles,getEmptyFiles,getContentArray,
   getFilesCount,getHtmlCount,getUploadApiResponse,getDownloadData,getCheckedTags,getFileUrl,
   getValidHtml,removeDownloadData} from './action';


const mapStateToProps = (state) => {
   // console.log(state.contentArray);
   // console.log('state value',state);
   return {
      token: state.token,
      nameArray:state.nameArray,
      resultArray:state.resultArray,
      selectedFiles:state.selectedFiles,
      emptyFiles:state.emptyFiles,
      contentArray:state.contentArray,
      filesCount:state.filesCount,
      htmlCount:state.htmlCount,
      uploadApiResponse:state.uploadApiResponse,
      downloadData:state.downloadData,
      checkedElements:state.checkedElements,
      fileUrl:state.fileUrl,
      validHtmlCount:state.validHtmlCount
   };
};
const mapDispatchToProps = (dispatch) => {

   return {
      getToken: () => dispatch(getNewToken()),
      storeNameArray:(nameArray)=> dispatch(getNameArray(nameArray)),
      storeResultArray:(resultArray)=>dispatch(getResultArray(resultArray)),
      storeSelectedFiles:(selectedFiles)=>dispatch(getSelectedFiles(selectedFiles)),
      storeEmptyFiles:(emptyFiles)=>dispatch(getEmptyFiles(emptyFiles)),
      storeContentArray:(contentArray)=>dispatch(getContentArray(contentArray)),
      storeFilesCount:(filesCount)=>dispatch(getFilesCount(filesCount)),
      storeHtmlCount:(htmlCount)=>dispatch(getHtmlCount(htmlCount)),
      setUploadResponse:(uploadApiResponse)=>dispatch(getUploadApiResponse(uploadApiResponse)),
      storeDownloadData:(downloadData)=>dispatch(getDownloadData(downloadData)),
      storeCheckedTags:(checkedElements)=>dispatch(getCheckedTags(checkedElements)),
      storeFileUrl:(fileUrl)=>dispatch(getFileUrl(fileUrl)),
      storeValidHtml:(validHtmlCount)=>dispatch(getValidHtml(validHtmlCount)),
       deleteDownloadData:(downloadurl)=>dispatch(removeDownloadData(downloadurl))
   };
};

//export default connect(mapStateToProps, mapDispatchToProps)(InputCodeComponent);
// eslint-disable-next-line import/no-anonymous-default-export
export default {
   InputCodeComponent: connect(mapStateToProps,mapDispatchToProps)(InputCodeComponent),
   Status: connect(mapStateToProps,mapDispatchToProps)(Status),
   Result:connect(mapStateToProps,mapDispatchToProps)(Result),
   FinalOutput:connect(mapStateToProps,mapDispatchToProps)(FinalOutput),
   FilterElements:connect(mapStateToProps,mapDispatchToProps)(FilterElements)
}