/// <reference path="Engine/Runner.ts" />

module JavaScriptThickClient.Js {

    class Program {

        private appender: any;
        private configuration: any;

        constructor(configuration, appender) {
            this.appender = appender;
            this.configuration = configuration;
        }

        Main() {
            var runner = new Engine.Runner(this.configuration.replacementRules);
            runner.Run(this.configuration.lowerBound, this.configuration.upperBound, this.appender);
        }
    }
}