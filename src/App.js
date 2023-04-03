import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';

function App() {
    return (
        <>
            <Routes>

                <Route path="/"
                    element={<Header/>}/>

            </Routes>
        </>
    );
}

export default App;
