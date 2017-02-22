var GHUtil = require('./GHUtil.js');
var GHInput = require('./GHInput.js');
var GraphHopperGeocoding = require('./GraphHopperGeocoding.js');
var GraphHopperIsochrone = require('./GraphHopperIsochrone.js');
var GraphHopperMapMatching = require('./GraphHopperMapMatching.js');
var GraphHopperMatrix = require('./GraphHopperMatrix.js');
var GraphHopperOptimization = require('./GraphHopperOptimization.js');
var GraphHopperRouting = require('./GraphHopperRouting.js');

var GraphHopper = {
    "Util": GHUtil,
    "Input": GHInput,
    "Geocoding": GraphHopperGeocoding,
    "Isochrone": GraphHopperIsochrone,
    "MapMatching": GraphHopperMapMatching,
    "Optimization": GraphHopperOptimization,
    "Routing": GraphHopperRouting,
    "Matrix": GraphHopperMatrix
};


// define GraphHopper for Node module pattern loaders, including Browserify
if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports.GraphHopper = GraphHopper;

// define GraphHopper as an AMD module
} else if (typeof define === 'function' && define.amd) {
    define(GraphHopper);
}

if (typeof window !== 'undefined') {
    window.GraphHopper = GraphHopper;
}

var myFirstPromise = new Promise(function (resolve, reject) {
    //We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
    //In this example, we use setTimeout(...) to simulate async code.
    //In reality, you will probabally using something like XHR or an HTML5 API.
    setTimeout(function () {
        resolve("Success!"); //Yay! Everything went well!
    }, 250);
});

myFirstPromise.then(function (successMessage) {
    //successMessage is whatever we passed in the resolve(...) function above.
    //It doesn't have to be a string, but if it is only a succeed message, it probabally will be.
    console.log("Yay! " + successMessage);
});