var JavaScriptThickClient;
(function (JavaScriptThickClient) {
    (function (Js) {
        /// <reference path="ApplicationBus.ts" />
        /// <reference path="Runner.ts" />
        /// <reference path="Appender.ts" />
        /// <reference path="FizzBuzzCommand.ts" />
        (function (Engine) {
            var FizzBuzzCommandHandler = (function () {
                function FizzBuzzCommandHandler(appender) {
                    this.appender = appender;
                }
                FizzBuzzCommandHandler.prototype.CanHandle = function (event) {
                    return event instanceof Engine.FizzBuzzCommand;
                };
                FizzBuzzCommandHandler.prototype.Handle = function (event) {
                    GlobalApplicationBus.Send("Clearing appender");
                    this.appender.Clear();
                    var runner = new Engine.Runner(event.Configuration.ReplacementRules);
                    GlobalApplicationBus.Send("Begin run");
                    runner.Run(event.Configuration.LowerBound, event.Configuration.UpperBound, this.appender);
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
