var JavaScriptThickClient;
(function (JavaScriptThickClient) {
    (function (Js) {
        /// <reference path="Appender.ts" />
        (function (Engine) {
            var Runner = (function () {
                function Runner(replacements) {
                    this.replacements = replacements;
                }
                Runner.prototype.Run = function (start, end, appender) {
                    for(var i = start; i <= end; i++) {
                        appender.Append(this.GetLine(i));
                    }
                };
                Runner.prototype.GetLine = function (value) {
                    var line = this.GetReplacements(value);
                    return line == "" ? value : line;
                };
                Runner.prototype.GetReplacements = function (value) {
                    var replacedValue = "";
                    for(var key in this.replacements) {
                        if(value % key === 0) {
                            replacedValue += this.replacements[key];
                        }
                    }
                    return replacedValue;
                };
                return Runner;
            })();
            Engine.Runner = Runner;            
        })(Js.Engine || (Js.Engine = {}));
        var Engine = Js.Engine;
    })(JavaScriptThickClient.Js || (JavaScriptThickClient.Js = {}));
    var Js = JavaScriptThickClient.Js;
})(JavaScriptThickClient || (JavaScriptThickClient = {}));
//@ sourceMappingURL=Runner.js.map
