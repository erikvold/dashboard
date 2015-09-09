var React = require('react');

var Users = React.createClass({

	render: function() {
		return (
			<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
	          <h1 className="page-header">我是用户管理页</h1>
	          <a href="/userDetails">用户详情页</a>

	        </div>
		);
	}

});

module.exports = Users;