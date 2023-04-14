import React from 'react';
import './App.css';
// import {Routes, Route} from "react-router-dom";
// import Home from './pages/Home';
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase/firebase';
import Login from './pages/Login';
import Spinner from 'react-spinkit'

function App() {
    const [user, loading] = useAuthState(auth)

    if(loading)
    {
        return(
            <AppLoading>
                <AppLoadingContents>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" alt="" />

                    <Spinner name="ball-spin-fade-loader"
                    color='purple'
                    fadeIn='none'
                    />
                </AppLoadingContents>
            </AppLoading>
        )
    }
    return (
        <div className="app">
            {
            !user ? (
                <Login/>) : (
                <>
                    <Header/>
                    <AppBody>
                        <Sidebar/>
                        <Chat/> {/* <Routes>

                    <Route path="/" element={<Home/>}/>  
                </Routes> */} </AppBody>
                </>
            )
        } </div>
    );
}

export default App;

const AppBody = styled.div `
display: flex;
height: 100vh;
`

const AppLoading = styled.div`
display: grid;
place-items: center;
height: 100vh;
width: 100%;
`

const AppLoadingContents = styled.div`
text-align: center;
padding-bottom: 100px;
display: flex;
flex-direction: column;
justify-content: column;
align-items: center;

>img{
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
}
`
