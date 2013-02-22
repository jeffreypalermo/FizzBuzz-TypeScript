/// <reference path="Handler.ts" />

module JavaScriptThickClient.Js.Engine {

    export class LoggingHandler implements Handler {

        CanHandle(event: any) { return true; }
        Handle(event: any) { console.log(event); }
    }
}