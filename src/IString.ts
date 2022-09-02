export class IString {

    private constructor() { }

    /**
     * Creates a randomised Hex value.
     * 
     * @returns string
     */
    public static createHexValue() {
        const letters: string[] = '0123456789ABCDEF'.split('');
        let color: string = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /**
     * Takes a string, parses it & decides if is a numeric value, or not.
     * 
     * @param text
     * @returns boolean
     */
    public static isNumeric(text: string): boolean {
        return !isNaN(+text);
    }
}