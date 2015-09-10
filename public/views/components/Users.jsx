var React = require('react');
var Sidebar = require('./Sidebar.jsx');

var Users = React.createClass({

	render: function() {
		return (
	        <div className="container-fluid">
		        <div className="row">
		          
		           <Sidebar />
					<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			          <h1 className="page-header">我是用户管理页</h1>
			          <a href="/userDetails">用户详情页</a>
			        </div>
		        </div>
	        </div>
		);
	}

});

module.exports = Users;