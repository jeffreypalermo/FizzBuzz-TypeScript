module JavaScriptThickClient.Js.Engine {

    export class Runner {
        replacements: any;

        constructor(replacements) {
            this.replacements = replacements;
        }

        Run(start, end, appender) {
            for (var i = start; i <= end; i++) {
                appender.Append(this.GetLine(i));
            }
        };

        GetLine(value) {
            var line = this.GetReplacements(value);

            return line == "" ? value : line;
        };

        GetReplacements(value) {
            var replacedValue = "";
            for (var key in this.replacements) {
                if (value % key === 0) replacedValue += this.replacements[key];
            }

            return replacedValue;
        };
    }
}