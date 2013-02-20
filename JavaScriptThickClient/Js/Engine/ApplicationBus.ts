/// <reference path="Handler.ts" />

module JavaScriptThickClient.Js.Engine {

    export class ApplicationBus {
        private listeners: any[] = [];

        Add(listener: any) {
            this.listeners.push(listener);
        }

        Send(event) {
            for (var item in this.listeners) {
                var handler = this.listeners[item];

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
