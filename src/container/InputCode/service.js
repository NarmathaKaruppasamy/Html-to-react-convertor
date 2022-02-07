import ApiService from "../../components/ApiService";
const data={
            username: 'verizon',
            password:'verizon'
           }
            ApiService.token(data)
            .then(res=>{
                console.log(res.data.token);
            }).catch(function (error) {
                console.log(error);
            });
