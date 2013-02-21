/// <reference path="Handler.ts" />

module JavaScriptThickClient.Js.Engine {

    export class ApplicationBus {
        private handlers: Handler[] = [];

        Add(handler: Handler) {
            this.handlers.push(handler);
        }

        Send(event) {
            for (var item in this.handlers) {
                var handler: any = this.handlers[item];

                console.log(handler.constructor.name +
                    ": testing for handlability of " + event.constructor.name);

                if (handler.CanHandle(event)) {
                    console.log(handler.constructor.name + ": sending event, " + event.constructor.name);
                    handler.Handle(event);
                }
            }
        }
    }
}

var GlobalApplicationBus = new JavaScriptThickClient.Js.Engine.ApplicationBus();
