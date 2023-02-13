export class IString {

    protected constructor() { }

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
     * Creates a randomised string, containing letters & numbers, depending on set 'length'.
     * 
     * @returns string
     */
    public static createRandomString(length: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const { length: chLength } = characters;
        let result = '';

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * chLength));
        }
        return result;
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