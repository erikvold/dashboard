'use strict';

module.exports = function (router) {

    var model = {
    	name: 'name form cc.js'
    };

    router.get('/', function(req, res) {
    	console.log('cc:', req.url);
        res.render('/cc', model);
    });

};