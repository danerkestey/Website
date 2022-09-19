import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>under construction lol</h1>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;