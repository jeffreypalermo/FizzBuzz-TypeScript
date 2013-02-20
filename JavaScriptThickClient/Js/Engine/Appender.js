var JavaScriptThickClient;
(function (JavaScriptThickClient) {
    (function (Js) {
        (function (Engine) {
            var Appender = (function () {
                function Appender() { }
                Appender.prototype.Append = function (line) {
                    console.log(line);
                };
                Appender.prototype.Clear = function () {
                };
                return Appender;
            })();
            Engine.Appender = Appender;            
        })(Js.Engine || (Js.Engine = {}));
        var Engine = Js.Engine;
    })(JavaScriptThickClient.Js || (JavaScriptThickClient.Js = {}));
    var Js = JavaScriptThickClient.Js;
})(JavaScriptThickClient || (JavaScriptThickClient = {}));
//@ sourceMappingURL=Appender.js.map
