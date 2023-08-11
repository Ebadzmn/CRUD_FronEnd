import React, {useEffect, useState} from 'react';
import {Delete, ReadPost} from "../../apicall/ProductApi.jsx";
import Loader from "../common/Loader.jsx";
import ValidationHelper from "../../helper/ValidationHelper.jsx";
import { ToastContainer } from "react-toastify";
import axios from "axios";

const Read = () => {
    const { SuccessToast, ErrorToast } = ValidationHelper();
    const [data, setData] = useState([]);
    const [id, setID] = useState("");

    useEffect(() => { ReadPost().then((res)=>{
        setData(res);
    })
    }, [id]);

    //delete item

const deleteItem = (id) => {
    Delete(id).then((result)=>{
        if(result===true){

            SuccessToast("Deleted successfully!");
            setID(id);
        }
        else{
            ErrorToast("Something went wrong!");
        }
    })
}



      const UpdateItem = (id) => {
           props.history.push("/update/"+id);
      }



         if(data.length>0){
             return (
                 <div className="card p-1">
                     <table className='table table-dark table-striped'>
                         <thead>

                         <tr>
                             <th>Product Name</th>
                             <th>Product Code</th>
                             <th>Image</th>
                             <th>Unit Price</th>
                             <th>Quantity</th>
                             <th>Total Price</th>
                             <th>Action</th>
                         </tr>
                         </thead>
                         <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.ProductCode}</td>
                                        <td><img src={item.Img} alt="product" width="100px" height="100px"/></td>
                                        <td>{item.UnitPrice}</td>
                                        <td>{item.Quantity}</td>
                                        <td>{item.TotalPrice}</td>
                                        <td>   <button onClick={() => window.location.href = `/update/${item._id}`} className="btn btn-primary">
                                            Edit
                                        </button> <button onClick={deleteItem.bind(this,item._id)} className="btn btn-danger">Delete</button></td>
                                    </tr>
                                )}
                            )}

                         </tbody>
                     </table>

                 </div>
             );
         }
            else{
                return (
                    <div>
                        <Loader />

                    </div>
                );

                 return (
                     <div>
                            <ToastContainer />
                     </div>
                 );

         }


};

export default Read;










// async()=>{await onDelete(item['_id'])}
// <button onClick={UpdateItem.bind(this,item._id)} className="btn btn-primary">Edit</button>


// const onDelete = async (id) => {
//     let URL="http://localhost:8000/api/v1/deleteProduct/"+id;
//     await axios.delete(URL)
//     setID(id);
// }