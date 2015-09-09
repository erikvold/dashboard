'use strict';

var mongoose = require('mongoose');

var ImoocModel = function IndexModel() {

	//Define a super simple schema for our products.
    var imoocSchema = new mongoose.Schema({
        // x: { type:Number}
    });

    return mongoose.model('prays', imoocSchema);
};

module.exports = new ImoocModel();