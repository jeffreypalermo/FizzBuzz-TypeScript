module JavaScriptThickClient.Js.Engine {

    export class Configuration {
        private replacementRules: any;
        private lowerBound: number;
        private upperBound: number;

        constructor(replacementRules, lowerBound, upperBound) {
            this.replacementRules = replacementRules;
            this.lowerBound = lowerBound;
            this.upperBound = upperBound;

        }
    }
}