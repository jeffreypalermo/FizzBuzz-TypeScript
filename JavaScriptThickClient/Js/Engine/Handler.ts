module JavaScriptThickClient.Js.Engine {

    export interface Handler {
        CanHandle(event): bool;
        Handle(event): void;
    };
}