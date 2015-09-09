var React = require('react');

var CView = React.createClass({

	render: function() {
		return (
			<div> 我是CView组件, name: {this.props.name} </div>
		);
	}

});

module.exports = CView;