import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ShopPage from "./components/shop/shop.component";

import './App.css';
import HomePage from "./components/pages/homepages.component.jsx";

function App() {
  return (
    <div>
        <Switch>

             <Route  exact path="/" component={HomePage} />
             <Route  path='/shop' component={ShopPage} />

        </Switch>

    </div>
  );
}

export default App;
