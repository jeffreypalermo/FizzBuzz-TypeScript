var JavaScriptThickClient;
(function (JavaScriptThickClient) {
    (function (Js) {
        (function (Engine) {
            var ReplacementRule = (function () {
                function ReplacementRule(index, replaceValue) {
                    this.index = index;
                    this.replaceValue = replaceValue;
                }
                Object.defineProperty(ReplacementRule.prototype, "Index", {
                    get: function () {
                        return this.index;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ReplacementRule.prototype, "ReplaceValue", {
                    get: function () {
                        return this.replaceValue;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ReplacementRule;
            })();
            Engine.ReplacementRule = ReplacementRule;            
        })(Js.Engine || (Js.Engine = {}));
        var Engine = Js.Engine;
    })(JavaScriptThickClient.Js || (JavaScriptThickClient.Js = {}));
    var Js = JavaScriptThickClient.Js;
})(JavaScriptThickClient || (JavaScriptThickClient = {}));
//@ sourceMappingURL=ReplacementRule.js.map
