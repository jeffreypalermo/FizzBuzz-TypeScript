/// <reference path="ApplicationBus.ts" />
/// <reference path="Runner.ts" />
/// <reference path="Appender.ts" />

module JavaScriptThickClient.Js.Engine {

    export class FizzBuzzCommandHandler implements Handler {

        private appender: Appender;

        constructor(appender) {
            this.appender = appender;
        }

        CanHandle(event) {
            return event.configuration !== undefined;
        }

        Handle(event) {
            GlobalApplicationBus.Send("Clearing appender");
            this.appender.Clear();

            var runner = new JavaScriptThickClient.Js.Engine.Runner(event.configuration.replacementRules);

            GlobalApplicationBus.Send("Begin run");
            runner.Run(event.configuration.lowerBound,
                event.configuration.upperBound, this.appender);
            GlobalApplicationBus.Send("End run");
        };
    }
}