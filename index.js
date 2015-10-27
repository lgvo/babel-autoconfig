var supports = require("es-feature-tests");

var mappings = {
    "es6.arrowFunctions": ["arrow"],
    "es6.blockScoping": ["letConst","letLoop","constLoop"],
};

supports("all", function(results, timestamp) {

    var options = [];

    Object.getOwnPropertyNames(mappings).forEach(function(name) {
    
            var hasSupport = mappings[name].reduce(function(support, test) {
                        return support && results[test]; 
                    }, true);
    
            if (!hasSupport) {
                        options.push(name);
                    }
        });
    console.log(options);
});
