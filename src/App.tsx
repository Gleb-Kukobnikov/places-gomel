// LIBRARIES
import React from 'react';
import 'css-reset-and-normalize';
// COMPONENTS
import {RandomRestaurant} from "./containers";
// STYLES
import './App.css';

const App = () => (
    <div className="App">
        <h1 className="headline">Куда пойти в Гомеле?</h1>
        <RandomRestaurant />
    </div>
);

export default App;
