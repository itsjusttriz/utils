export class INumber {
    constructor() { }

    public static convertTemperature(degree: number, type: 'fahrenheit' | 'celsius') {
        return ({
            fahrenheit: (celsius: number) => (celsius * 9 / 5 + 32).toString(),
            celsius: (fahrenheit: number) => ((fahrenheit - 32) * 5 / 9).toString()
        })[type](degree);
    }
}