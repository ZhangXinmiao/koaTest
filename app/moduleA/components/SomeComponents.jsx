var React = require('react');
var ReactDOM = require('react-dom');

var SomeComponents = React.createClass({
  render: function(){
      return (
        <ul>
          <li><a href="/first">😀</a></li>
          <li><a href="/second">😁</a></li>
          <li><a href="/third">😆</a></li>
          <li><a href="/forth">😊</a></li>
          <li><a href="/fifth">🙂</a></li>
        </ul>
      );
  }

});

module.exports = SomeComponents;
