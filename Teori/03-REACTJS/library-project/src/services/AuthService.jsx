import axios from "axios";


const AuthService = {
    login: async(username,password)=>{
        const url = "https://api.escuelajs.co/api/v1/auth/login";
        const response = await axios.post(url,{
            email: username,
            password
        })//giriş başarılı ise tokenleri döner.(access ve refresh)
        console.log(response);
        if(response.data.access_token){
            localStorage.setItem("user",JSON.stringify(response.data));
            //giriş başarılı ise localStorage'a tokenleri kaydet.
        }
        return response.data;
    },
    logout:()=>{
        localStorage.removeItem("user");
        //login durumunda localstorage'a kaydedilen tokenleri siler.
    }
}

export default AuthService;