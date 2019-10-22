import React from 'react';
import './resources/css/App.css';

// import { Button } from 'antd'

// import  'src/resources/css/fullPage/fullPage.css'
import 'antd/dist/antd.css'

import Home from "./pages/home/Home"

import Router from "./router/Router"

function App() {
    return (
        <div className="App">
            <Router/>
        </div>
    );
}

export default App;
