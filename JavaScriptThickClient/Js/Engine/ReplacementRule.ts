module JavaScriptThickClient.Js.Engine {
    
    export class ReplacementRule {

        public index: number;
        public replaceValue: string;

        constructor(index: number, replaceValue: string) {
            this.index = index;
            this.replaceValue = replaceValue;
        }

        get Index(): number {
            return this.index;
        }

        get ReplaceValue(): string {
            return this.replaceValue;
        }
    }

}