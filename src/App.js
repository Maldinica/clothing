import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css';
import HomePage from "./pages/homepages.component.jsx";

const HatsPage = () =>(
    <div>
        <h1> HATS PAGE</h1>
    </div>
)

const TopicPageDetail = () =>(
    <div>
        <h1> TOPIC DETAIL PAGE</h1>
    </div>
)

function App() {
  return (
    <div>
        <Switch>

             <Route  exact path="/" component={HomePage} />
             <Route  path='/shop/hats' component={HatsPage} />
             <Route  path='/topics/:topicId' component={TopicPageDetail} />
        </Switch>

    </div>
  );
}

export default App;
