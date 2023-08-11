import React, {useEffect} from "react";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ValidationHelper() {
    const isEmpty = (value) => {
        return value.length === 0;

    };

    const SuccessToast = (msg) => {
        toast.success(msg, { position: "top-right" });
    };

    const ErrorToast = (msg) => {
        toast.error(msg, { position: "top-center" });
    };

    return {
        isEmpty,
        SuccessToast,
        ErrorToast
    };
}

export default ValidationHelper;





// ValidationHelper.jsx











// useEffect(() => {
//     const fetchProductDetails = async () => {
//         try {
//             setLoading(true);
//             const id = props.id;
//             // const productDetails = await ReadPost(id,name);
//
//
//             setProductName(productDetails.name);
//             setProductCode(productDetails.ProductCode);
//             setImage(productDetails.Img);
//             setUnitPrice(productDetails.UnitPrice);
//             setQuantity(productDetails.Quantity);
//             setTotalPrice(productDetails.TotalPrice);
//             setLoading(false);
//         } catch (error) {
//             console.error("Error fetching product details:", error);
//             setLoading(false);
//         }
//     };


