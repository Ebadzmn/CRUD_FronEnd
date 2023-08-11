import React, {useEffect, useState} from 'react';
import Loader from "../common/Loader.jsx";
import {ToastContainer} from "react-toastify";
import ValidationHelper from "../../helper/ValidationHelper.jsx";
import {ReadByID, UpdatePost} from "../../apicall/ProductApi.jsx";

const Update = (props) => {
    const { isEmpty, SuccessToast, ErrorToast } = ValidationHelper();

    const [productName, setProductName] = useState("");
    const [productCode, setProductCode] = useState("");
    const [image, setImage] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    let [loading, setLoading] = useState(false);


    const handleUpdate = async () => {
        try {
            setLoading(true); // Set loading state here
            const id = props.id;

            // Make the API call

            const res = await UpdatePost(id, productName, productCode, image, unitPrice, quantity, totalPrice);

            console.log(res);
            SuccessToast("Updated successfully!");

            // Clear input fields after successful submission
            // setProductName("");
            // setProductCode("");
            // setImage("");
            // setUnitPrice("");
            // setQuantity("");
            // setTotalPrice("");

            setLoading(false); // Reset loading state
        } catch (error) {
            console.error("Error updating product:", error);
            ErrorToast("Failed to update product");
            setLoading(false); // Reset loading state in case of error
        }
    };


    useEffect(() => {
        ReadByID(props.id).then((res) => {

            setProductName(res.name);
            setProductCode(res.ProductCode);
            setImage(res.Img);
            setUnitPrice(res.UnitPrice);
            setQuantity(res.Quantity);
            setTotalPrice(res.TotalPrice);
        });
    } , []);



     if(productName.length>0){
         return (
             <div className="container">
                 <div className="card p-5">
                     <div className="row p-2">
                         {/** Product Name */}
                         <div className="col-md-4 p-3">
                             <label>Product Name</label>
                             <input
                                 className="form-control"
                                 type="text"
                                 value={productName}
                                 onChange={(e) => setProductName(e.target.value)}
                             />
                         </div>

                         {/** Product Code */}
                         <div className="col-md-4 p-3">
                             <label>Product Code</label>
                             <input
                                 className="form-control"
                                 type="text"
                                 value={productCode}
                                 onChange={(e) => setProductCode(e.target.value)}
                             />
                         </div>

                         {/** Image */}
                         <div className="col-md-4 p-3">
                             <label>Image</label>
                             <input
                                 className="form-control"
                                 type="text"
                                 value={image}
                                 onChange={(e) => setImage(e.target.value)}
                             />
                         </div>

                         {/** Unit Price */}
                         <div className="col-md-4 p-3">
                             <label>Unit Price</label>
                             <input
                                 className="form-control"
                                 type="text"
                                 value={unitPrice}
                                 onChange={(e) => setUnitPrice(e.target.value)}
                             />
                         </div>

                         {/** Quantity */}
                         <div className="col-md-4 p-3">
                             <label>Quantity</label>
                             <input
                                 className="form-control"
                                 type="text"
                                 value={quantity}
                                 onChange={(e) => setQuantity(e.target.value)}
                             />
                         </div>

                         {/** Total Price */}
                         <div className="col-md-4 p-3">
                             <label>Total Price</label>
                             <input
                                 className="form-control"
                                 type="text"
                                 value={totalPrice}
                                 onChange={(e) => setTotalPrice(e.target.value)}
                             />
                         </div>

                         {/** Submit Button */}
                         <div className="col-md-12 p-3">
                             <button onClick={handleUpdate} className="btn btn-primary w-100 p-3">
                                 Add Product
                             </button>
                         </div>
                     </div>
                 </div>

                 {/* Show loader when loading */}
                 {loading && <Loader />}
                 <ToastContainer />

             </div>
            );
     }

     else{
            return (
                <Loader />
            );

     }






};

export default Update;