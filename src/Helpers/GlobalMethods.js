import axios from 'react-native-axios'

const HelperMethods ={

    makeNetworkCall_post : function (url,formData,callBack){
        axios({
            url:url,
            method:"POST",
            data:formData,
            headers:{
                Accept:'application/json',
                'Content-Type':'multipart/form-data'

            }
        }).then((response)=>{
            callBack(response)
        })        
    } 
    
},
export default HelperMethods