export class IString extends String {
    private _string!: string;

    constructor(text?: string) {
        super();
        if (text)
            this.value = text;
    }

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

    public get value(): string {
        return this._string;
    }
    public set value(value: string) {
        this._string = value;
    }
}