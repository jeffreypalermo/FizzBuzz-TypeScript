var JavaScriptThickClient;
(function (JavaScriptThickClient) {
    (function (Js) {
        (function (Engine) {
            var Configuration = (function () {
                function Configuration(replacementRules, lowerBound, upperBound) {
                    this.replacementRules = replacementRules;
                    this.lowerBound = lowerBound;
                    this.upperBound = upperBound;
                }
                Object.defineProperty(Configuration.prototype, "ReplacementRules", {
                    get: function () {
                        return this.replacementRules;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "LowerBound", {
                    get: function () {
                        return this.lowerBound;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Configuration.prototype, "UpperBound", {
                    get: function () {
                        return this.upperBound;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Configuration;
            })();
            Engine.Configuration = Configuration;            
        })(Js.Engine || (Js.Engine = {}));
        var Engine = Js.Engine;
    })(JavaScriptThickClient.Js || (JavaScriptThickClient.Js = {}));
    var Js = JavaScriptThickClient.Js;
})(JavaScriptThickClient || (JavaScriptThickClient = {}));
//@ sourceMappingURL=Configuration.js.map
