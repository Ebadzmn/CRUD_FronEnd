// import React, {useRef} from 'react';
// import ValidationHelper from "../../helper/ValidationHelper.jsx";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
//
// const Create = () => {
//
//     let name,ProductCode,Img,UnitPrice,Quantity,TotalPrice = useRef()
//
//
//     const SaveData = () => {
//         const { isEmpty, SuccessToast, ErrorToast } = ValidationHelper();
//
//         let Name = name.value
//         let productcode = ProductCode.value
//         let img = Img.value
//         let unitPrice = UnitPrice.value
//         let quantity = Quantity.value
//         let totalPrice = TotalPrice.value
//
//         if (isEmpty(Name)) {
//             ValidationHelper.ErrorToast("Name is required")
//             return false
//         }
//
//         if (isEmpty(productcode)) {
//             ValidationHelper.ErrorToast("Product Code is required")
//             return false
//         }
//
//         if (ValidationHelper.isEmpty(img)) {
//             ValidationHelper.ErrorToast("Image is required")
//             return false
//         }
//
//         if (ValidationHelper.isEmpty(unitPrice)) {
//             ValidationHelper.ErrorToast("Unit Price is required")
//             return false
//         }
//
//         if (ValidationHelper.isEmpty(quantity)) {
//             ValidationHelper.ErrorToast("Quantity is required")
//             return false
//         }
//
//         if (ValidationHelper.isEmpty(totalPrice)) {
//             ValidationHelper.ErrorToast("Total Price is required")
//             return false
//         }
//
//     }
//
//     return (
//         <div className='container'>
//
//             <div className='row'>
//
//                 <div className='col-md-4 p-3'>
//                     <label>Product Name</label>
//                     <input ref={(input) => name = input} type='text' className='form-control' />
//                 </div>
//
//                 <div className='col-md-4 p-3'>
//                     <label>Product Code</label>
//                     <input ref={(input) => ProductCode = input} type='text' className='form-control' />
//                 </div>
//
//                 <div className='col-md-4 p-3'>
//                     <label>Image</label>
//                     <input ref={(input) => Img = input} type='text' className='form-control' />
//                 </div>
//
//                 <div className='col-md-4 p-3'>
//                     <label>Unit Price</label>
//                     <input ref={(input) => UnitPrice = input} type='text' className='form-control' />
//                 </div>
//
//                 <div className='col-md-4 p-3'>
//                     <label>Quantity</label>
//                     <input ref={(input) => Quantity = input} type='text' className='form-control' />
//                 </div>
//
//                 <div className='col-md-4 p-3'>
//                     <label>Total Price</label>
//                     <input ref={(input) => TotalPrice = input} type='text' className='form-control' />
//                 </div>
//
//             </div>
//
//             <div className='row'>
//                 <div className='col-md-4 p-3'>
//                     <button onClick={SaveData} className='btn btn-primary w100'>Add Product</button>
//                 </div>
//             </div>
//
//             <ToastContainer />
//
//         </div>
//     );
// };
//
// export default Create;






import React, { useState } from "react";
import ValidationHelper from "../../helper/ValidationHelper.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreatePost } from "../../apicall/ProductApi.jsx";
import Loader from "../common/Loader.jsx";

function Create() {
    const { isEmpty, SuccessToast, ErrorToast } = ValidationHelper();

    const [productName, setProductName] = useState("");
    const [productCode, setProductCode] = useState("");
    const [image, setImage] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    let [loading, setLoading] = useState(false);



    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (isEmpty(productName) || isEmpty(productCode) || isEmpty(image) || isEmpty(unitPrice) || isEmpty(quantity) || isEmpty(totalPrice)) {
            ErrorToast("All fields are required.");
        } else {
             setLoading(true);
            CreatePost(productName, productCode, image, unitPrice, quantity, totalPrice )
                .then((res) => {
                    console.log(res);
                    SuccessToast("Submitted successfully!");
                    // Clear input fields after successful submission
                    setProductName("");
                    setProductCode("");
                    setImage("");
                    setUnitPrice("");
                    setQuantity("");
                    setTotalPrice("");
                })
                .catch((err) => {
                    console.log(err);
                    ErrorToast("Something went wrong!");
                })
                .finally(() => {
                    setLoading(false); // Stop loading animation after success or error
                });
        }
    };

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
                        <button onClick={handleFormSubmit} className="btn btn-primary w-100 p-3">
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

export default Create;
