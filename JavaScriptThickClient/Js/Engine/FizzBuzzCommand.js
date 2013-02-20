var JavaScriptThickClient;
(function (JavaScriptThickClient) {
    (function (Js) {
        /// <reference path="Configuration.ts" />
        (function (Engine) {
            var FizzBuzzCommand = (function () {
                function FizzBuzzCommand(configuration) {
                    this.configuration = configuration;
                }
                return FizzBuzzCommand;
            })();
            Engine.FizzBuzzCommand = FizzBuzzCommand;            
        })(Js.Engine || (Js.Engine = {}));
        var Engine = Js.Engine;
    })(JavaScriptThickClient.Js || (JavaScriptThickClient.Js = {}));
    var Js = JavaScriptThickClient.Js;
})(JavaScriptThickClient || (JavaScriptThickClient = {}));
//@ sourceMappingURL=FizzBuzzCommand.js.map
