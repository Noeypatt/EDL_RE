import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router } from "react-router-dom"
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
            <header>
                <link href="https://fonts.googleapis.com/css?family=Pacifico|Prompt" rel="stylesheet"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
            
            </header>
            <Route exact path="/" component={Home} />
            <Route path="/App" component={App} />
            <Route path="/Expand" component={Expand} />
            <Route path="/News" component={News} />
            <Route path="/Activities" component={Activities} />
            <Route path="/Allowance" component={Allowance} />
            <Route path="/Health" component={Health} />
            <Route path="/Wecare" component={Wecare} />




        </div>
    </Router>, document.getElementById('root'));
