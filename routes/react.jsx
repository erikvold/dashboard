/*-------------------------------------------------------------------------------------------------------------------*\
 |  Copyright (C) 2015 PayPal                                                                                          |
 |                                                                                                                     |
 |  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
 |  with the License.                                                                                                  |
 |                                                                                                                     |
 |  You may obtain a copy of the License at                                                                            |
 |                                                                                                                     |
 |       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
 |                                                                                                                     |
 |  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
 |  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
 |  the specific language governing permissions and limitations under the License.                                     |
 \*-------------------------------------------------------------------------------------------------------------------*/

'use strict';

var React = require('react');
var Router = require('react-router');

var App = require('../public/views/app.jsx');
var Main = require('../public/views/components/Main.jsx');
var Users = require('../public/views/components/Users.jsx');
var Prays = require('../public/views/components/Prays.jsx');
var UserDetails = require('../public/views/components/UserDetails.jsx');
var Feedback = require('../public/views/components/Feedback.jsx');

var ss = require('../public/views/sc/s.jsx');
var cc = require('../public/views/sc/CView.jsx');

var routes = module.exports = (
    <Router.Route path='/' handler={App}>
        <Router.DefaultRoute handler={Main} />
        <Router.Route path="users" handler={Users}/>
	    <Router.Route path="prays" handler={Prays}/>
	    <Router.Route path="userDetails" handler={UserDetails}/>
	    <Router.Route path="feedback" handler={Feedback}/>
	    <Router.Route path="cc" handler={cc}/>
	    <Router.Route path="cc" handler={cc}/>
    </Router.Route>
);