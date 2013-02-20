var JavaScriptThickClient;
(function (JavaScriptThickClient) {
    /// <reference path="Engine/Runner.ts" />
    (function (Js) {
        var Program = (function () {
            function Program(configuration, appender) {
                this.appender = appender;
                this.configuration = configuration;
            }
            Program.prototype.Main = function () {
                var runner = new Js.Engine.Runner(this.configuration.replacementRules);
                runner.Run(this.configuration.lowerBound, this.configuration.upperBound, this.appender);
            };
            return Program;
        })();        
    })(JavaScriptThickClient.Js || (JavaScriptThickClient.Js = {}));
    var Js = JavaScriptThickClient.Js;
})(JavaScriptThickClient || (JavaScriptThickClient = {}));
//@ sourceMappingURL=Program.js.map
