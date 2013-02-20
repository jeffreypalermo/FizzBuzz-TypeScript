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
                return Configuration;
            })();
            Engine.Configuration = Configuration;            
        })(Js.Engine || (Js.Engine = {}));
        var Engine = Js.Engine;
    })(JavaScriptThickClient.Js || (JavaScriptThickClient.Js = {}));
    var Js = JavaScriptThickClient.Js;
})(JavaScriptThickClient || (JavaScriptThickClient = {}));
//@ sourceMappingURL=Configuration.js.map
