import React from 'react';
import Update from "../components/update/Update.jsx";
import AppNevBar from "../components/common/AppNevBar.jsx";
import { useParams } from "react-router-dom";

const UpdatePage = () => {
    const params = useParams();

    return (
        <div>
            <AppNevBar />
            <Update id={params['id']}/>
        </div>
    );
};

export default UpdatePage;