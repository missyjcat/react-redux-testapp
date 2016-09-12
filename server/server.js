var restify = require('restify');
var fs = require('fs');
var React = require('react');
var renderToString = require('react-dom/server').renderToString;
var App = require('../build/App').default;

var server = restify.createServer({
    name: 'MyApp',
});

var healthHandler = function(req, res, next) {
    res.end('<h1>Doing good.</h1>');
    return next();
};

var reactHandler = function(req, res, next) {
    var body = '<h2>Handling react.</h2>';
    var element = React.createElement(App, null);
    body += renderToString(element);
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/html'
    });
    res.end(body);
    return next();
};

var userHandler = function(req, res, next) {
    console.log('getting user');
    var body = {
        name: 'jess',
        kid: 'miles',
        husband: 'quang',
        dog: 'maggie',
        id: '001'
    };
    res.send(body);
    return next();
}

// Health
server.get('/health', healthHandler);

// Render
server.get('/auth', reactHandler);
server.get('/unauth', reactHandler);

// Data
server.get('/user', userHandler);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});