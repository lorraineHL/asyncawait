﻿import references = require('references');
//TODO: temp... require('../src/extensibility').config({ handlers: [ promise.handler, cps.handler, thunk.handler, general, value ]});
import promise = require('./promise');
import cps = require('./cps');
import thunk = require('./thunk');
export = api;



//TODO: temp testing...
import compound = require('./compound');
var value = {
    singular: (co, arg) => {
        setImmediate(() => { co.enter(null, arg); });
    },
    variadic: (co, args) => {
        setImmediate(() => { co.enter(null, args[0]); });
    },
    elements: () => 0
};




//TODO: temp testing...
var opts = { handlers: [ promise.handlers, cps.handlers, thunk.handlers, value ]};
var api: AsyncAwait.Await.API = <any> compound.mod({ defaultOptions: opts });//TODO: review awkward syntax, just want to pass opts
api.promise = promise;
api.cps = <any> cps;
api.thunk = <any> thunk;
