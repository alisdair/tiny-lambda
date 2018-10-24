'use strict';

exports.handler = function (event, context, callback) {
    var name = event.pathParameters.proxy || "world";
    var response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
        },
        body: "<p>Hello, " + name + "!</p>",
    };
    callback(null, response);
};
