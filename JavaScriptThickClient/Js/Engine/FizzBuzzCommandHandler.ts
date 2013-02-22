/// <reference path="ApplicationBus.ts" />
/// <reference path="Runner.ts" />
/// <reference path="Appender.ts" />
/// <reference path="FizzBuzzCommand.ts" />

module JavaScriptThickClient.Js.Engine {

    export class FizzBuzzCommandHandler implements Handler {

        private appender: Appender;

        constructor(appender: Appender) {
            this.appender = appender;
        }

        CanHandle(event: any) {           
            return event instanceof FizzBuzzCommand;
        }

        Handle(event: FizzBuzzCommand) {
            GlobalApplicationBus.Send("Clearing appender");
            this.appender.Clear();

            var runner: Runner = new Runner(event.Configuration.ReplacementRules);

            GlobalApplicationBus.Send("Begin run");

            runner.Run(event.Configuration.LowerBound,
                event.Configuration.UpperBound, this.appender);

            GlobalApplicationBus.Send("End run");
        };
    }
}