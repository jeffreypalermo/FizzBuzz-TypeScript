var JavaScriptThickClient;
(function (JavaScriptThickClient) {
    (function (Js) {
        /// <reference path="ApplicationBus.ts" />
        /// <reference path="Runner.ts" />
        /// <reference path="Appender.ts" />
        (function (Engine) {
            var FizzBuzzCommandHandler = (function () {
                function FizzBuzzCommandHandler(appender) {
                    this.appender = appender;
                }
                FizzBuzzCommandHandler.prototype.CanHandle = function (event) {
                    return event.configuration !== undefined;
                };
                FizzBuzzCommandHandler.prototype.Handle = function (event) {
                    GlobalApplicationBus.Send("Clearing appender");
                    this.appender.Clear();
                    var runner = new JavaScriptThickClient.Js.Engine.Runner(event.configuration.replacementRules);
                    GlobalApplicationBus.Send("Begin run");
                    runner.Run(event.configuration.lowerBound, event.configuration.upperBound, this.appender);
                    GlobalApplicationBus.Send("End run");
                };
                return FizzBuzzCommandHandler;
            })();
            Engine.FizzBuzzCommandHandler = FizzBuzzCommandHandler;            
        })(Js.Engine || (Js.Engine = {}));
        var Engine = Js.Engine;
    })(JavaScriptThickClient.Js || (JavaScriptThickClient.Js = {}));
    var Js = JavaScriptThickClient.Js;
})(JavaScriptThickClient || (JavaScriptThickClient = {}));
//@ sourceMappingURL=FizzBuzzCommandHandler.js.map
