import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './Home/Home'
import App from './App'
import Expand from './Header/Contents/Expand'
import News from './Content/Contents/News'
import Activities from './Content/Contents/Activities'
import Allowance from './Content/Contents/Allowance'
import Health from './Content/Contents/Health'
import Wecare from './Content/Contents/Wecare'



import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()


ReactDOM.render(
    <Router history={customHistory}>
         <div>
             
            <Route exact path="/" component={Home} />
            <Route path="/App" component={App} />
            <Route path="/Expand" component={Expand}/>
            <Route path="/News" component={News}/>
            <Route path="/Activities" component={Activities}/>
            <Route path="/Allowance" component={Allowance}/>
            <Route path="/Health" component={Health}/>
            <Route path="/Wecare" component={Wecare}/>
            

         
             
        </div>
    </Router>, document.getElementById('root'));
