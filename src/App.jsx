
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage.jsx";
import ReadPage from "./pages/ReadPage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";


//bootstrap css import
import 'bootstrap/dist/css/bootstrap.min.css';

//bootstrap js import
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ReadPage />} />
                <Route path="/create" element={<CreatePage />} />
                {/*<Route path="/update/:id" element={<UpdatePage />} />*/}
                <Route path="/update/:id" element={<UpdatePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

