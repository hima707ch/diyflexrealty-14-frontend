import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import RegisterPage from "./RegisterPage/Body.jsx";
import BookListPage from "./BookListPage/Body.jsx";
import BookDetailPage from "./BookDetailPage/Body.jsx";
import CartPage from "./CartPage/Body.jsx";
import CheckoutPage from "./CheckoutPage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/booklistpage" element={<BookListPage />} />
        <Route path="/bookdetailpage" element={<BookDetailPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
            </Routes>
        </Router>
    );
};

export default Body;