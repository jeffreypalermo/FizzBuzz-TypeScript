/// <reference path="Appender.ts" />
/// <reference path="ReplacementRule.ts" />

module JavaScriptThickClient.Js.Engine {

    export class Runner {

        private replacements: ReplacementRule[];

        constructor(replacements: ReplacementRule[]) {
            this.replacements = replacements;
        }

        Run(start, end, appender: Appender) {
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
            
            this.replacements.forEach((rule) => {
                if (value % rule.index === 0) replacedValue += rule.replaceValue;
            });

            return replacedValue;
        };
    }
}