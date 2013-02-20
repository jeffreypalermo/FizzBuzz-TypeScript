/// <reference path="Handler.ts" />

module JavaScriptThickClient.Js.Engine {

    export class LoggingHandler implements Handler {
        CanHandle(event) { return true; }
        Handle(event) {
            console.log(event);
        }
    }
}