module JavaScriptThickClient.Js.Engine {

    export interface Handler {

        CanHandle(event: any): bool;
        Handle(event: any): void;
    }
}