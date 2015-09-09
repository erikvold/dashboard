var React = require('react');

var Sidebar = React.createClass({

	render: function() {
		return (
			<div className="col-sm-3 col-md-2 sidebar">
	          <ul className="nav nav-sidebar">
	            <li className="active"><a href="/">Main<span className="sr-only">(current)</span></a></li>
	            <li><a href="/users">用户管理</a></li>
	            <li><a href="/prays">祷告管理</a></li>
	            <li><a href="/feedback">意见反馈</a></li>
	          </ul>
	          <ul className="nav nav-sidebar">
	            <li><a href="">Nav item</a></li>
	            <li><a href="">Nav item again</a></li>
	            <li><a href="">One more nav</a></li>
	            <li><a href="">Another nav item</a></li>
	            <li><a href="">More navigation</a></li>
	          </ul>
	          <ul className="nav nav-sidebar">
	            <li><a href="">Nav item again</a></li>
	            <li><a href="">One more nav</a></li>
	            <li><a href="">Another nav item</a></li>
	          </ul>
	        </div>
		);
	}

});

module.exports = Sidebar;