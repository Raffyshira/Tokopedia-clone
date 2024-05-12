import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PostProduct from "./pages/PostProduct";
import PromoHariIni from "./pages/Discovery/PromoHariIni";
import ProductPages from "./pages/Product/ProductPages";

// Login and Signup pages
import Login from "./pages/LoginPage/Login";
// Reset Password
import ResetPassword from "./pages/LoginPage/ResetPassword";
import Signup from "./pages/SignupPage/Signup";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    
                    <Route path="/post-product" element={<PostProduct />} />
                    
                    <Route path="/login" element={<Login />} />
                    
                    <Route path="/signup" element={<Signup />} />
                    
                    <Route path="/reset-password" element={<ResetPassword />} />
                    
                    <Route path="/discovery/deals" element={<PromoHariIni />} />

                    <Route
                        path="/product/:name_product"
                        element={<ProductPages />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
