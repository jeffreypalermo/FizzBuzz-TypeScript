/// <reference path="Configuration.ts" />

module JavaScriptThickClient.Js.Engine {

    export class FizzBuzzCommand {  
        private configuration: Configuration;

        constructor(configuration) {
            this.configuration = configuration;
        }

        get Configuration(): Configuration {
            return this.configuration;
        }
    }
}