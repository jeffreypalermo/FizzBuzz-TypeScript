var JavaScriptThickClient;
(function (JavaScriptThickClient) {
    (function (Js) {
        /// <reference path="Handler.ts" />
        (function (Engine) {
            var ApplicationBus = (function () {
                function ApplicationBus() {
                    this.listeners = [];
                }
                ApplicationBus.prototype.Add = function (listener) {
                    this.listeners.push(listener);
                };
                ApplicationBus.prototype.Send = function (event) {
                    for(var item in this.listeners) {
                        var handler = this.listeners[item];
                        console.log(handler.constructor.name + ": testing for handlability of " + event.constructor.name);
                        if(handler.CanHandle(event)) {
                            console.log(handler.constructor.name + ": sending event, " + event.constructor.name);
                            handler.Handle(event);
                        }
                    }
                };
                return ApplicationBus;
            })();
            Engine.ApplicationBus = ApplicationBus;            
        })(Js.Engine || (Js.Engine = {}));
        var Engine = Js.Engine;
    })(JavaScriptThickClient.Js || (JavaScriptThickClient.Js = {}));
    var Js = JavaScriptThickClient.Js;
})(JavaScriptThickClient || (JavaScriptThickClient = {}));
var GlobalApplicationBus = new JavaScriptThickClient.Js.Engine.ApplicationBus();
//@ sourceMappingURL=ApplicationBus.js.map
