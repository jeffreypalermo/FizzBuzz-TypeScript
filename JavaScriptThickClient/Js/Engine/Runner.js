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
//@ sourceMappingURL=Runner.js.map
