import axios from "axios";






export function CreatePost(name,ProductCode,Img,UnitPrice,Quantity,TotalPrice){


    const URL = "http://localhost:8000/api/v1/createProduct";
    const postBody = {
        name : name,
        ProductCode : ProductCode,
        Img : Img,
             UnitPrice : UnitPrice,
                Quantity : Quantity,
                  TotalPrice : TotalPrice,

    }


return axios.post(URL,postBody) .then((res)=>{
      if (res.status === 200) {
          return true
        } else {
            return false
        }
}) .catch((err)=>{
    console.log(err);
})
}






export function ReadPost(){
    const URL = "http://localhost:8000/api/v1/getAllProducts";
    return  axios.get(URL) .then((res)=>{
        if (res.status === 200) {
            return res.data["data"]
        } else {
            return false
        }
    }) .catch((err)=>{
        console.log(err);
        return false
    })
}




export function UpdatePost(id,name,ProductCode,Img,UnitPrice,Quantity,TotalPrice){
    const URL = "http://localhost:8000/api/v1/updateProduct/"+id;
    const postBody = {
        name : name,
        ProductCode : ProductCode,
        Img : Img,
                UnitPrice : UnitPrice,
                Quantity : Quantity,
                TotalPrice : TotalPrice,

    }
    return axios.put(URL,postBody) .then((res)=>{
        return res.status === 200;
    }) .catch((err)=>{
        console.log(err);
        return false
    })
}


export function ReadByID(id){
    let URL="http://localhost:8000/api/v1/getProductById/"+id;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}




export function Delete(id){
    const URL = "http://localhost:8000/api/v1/deleteProduct/"+id;
    return  axios.delete(URL).then((res)=>{
        if (res.status === 200) {
            return true
        } else {
            return false
        }
    }) .catch((err)=>{
        console.log(err);
        return false
    })
}
