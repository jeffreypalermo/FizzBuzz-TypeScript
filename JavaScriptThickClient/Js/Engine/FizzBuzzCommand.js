var JavaScriptThickClient;
(function (JavaScriptThickClient) {
    (function (Js) {
        /// <reference path="Configuration.ts" />
        (function (Engine) {
            var FizzBuzzCommand = (function () {
                function FizzBuzzCommand(configuration) {
                    this.configuration = configuration;
                }
                Object.defineProperty(FizzBuzzCommand.prototype, "Configuration", {
                    get: function () {
                        return this.configuration;
                    },
                    enumerable: true,
                    configurable: true
                });
                return FizzBuzzCommand;
            })();
            Engine.FizzBuzzCommand = FizzBuzzCommand;            
        })(Js.Engine || (Js.Engine = {}));
        var Engine = Js.Engine;
    })(JavaScriptThickClient.Js || (JavaScriptThickClient.Js = {}));
    var Js = JavaScriptThickClient.Js;
})(JavaScriptThickClient || (JavaScriptThickClient = {}));
//@ sourceMappingURL=FizzBuzzCommand.js.map
