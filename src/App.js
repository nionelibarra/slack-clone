import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
    return (
        <>
            <Header/>
            <AppBody>
                <Sidebar/>
                <Chat/>
                {/* <Routes>
                    <Route path="/" element={<Home/>}/>  
                </Routes> */}
              
            </AppBody>

        </>
    );
}

export default App;

const AppBody = styled.div `
display: flex;
height: 100vh;
`

