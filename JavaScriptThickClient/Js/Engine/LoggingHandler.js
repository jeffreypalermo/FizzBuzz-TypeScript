var JavaScriptThickClient;
(function (JavaScriptThickClient) {
    (function (Js) {
        /// <reference path="Handler.ts" />
        (function (Engine) {
            var LoggingHandler = (function () {
                function LoggingHandler() { }
                LoggingHandler.prototype.CanHandle = function (event) {
                    return true;
                };
                LoggingHandler.prototype.Handle = function (event) {
                    console.log(event);
                };
                return LoggingHandler;
            })();
            Engine.LoggingHandler = LoggingHandler;            
        })(Js.Engine || (Js.Engine = {}));
        var Engine = Js.Engine;
    })(JavaScriptThickClient.Js || (JavaScriptThickClient.Js = {}));
    var Js = JavaScriptThickClient.Js;
})(JavaScriptThickClient || (JavaScriptThickClient = {}));
//@ sourceMappingURL=LoggingHandler.js.map
