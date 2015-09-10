'use strict';

module.exports = function (router) {

    var model = {
    	name: 'name form users.js'
    };

    router.get('/', function(req, res) {
        res.render('/users', model);
    });

};