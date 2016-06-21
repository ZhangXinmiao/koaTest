require('node-jsx').install({
    extension: '.jsx'
});

var React = require('react');
var someComponent ＝ React.createFactory(require('./SomeComponent.jsx'));

var reactHtml = React.renderToString(someComponent(data));

module.exports.Container = Container;
