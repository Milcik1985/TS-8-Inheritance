// 1. Sukurti klasę Figure. Klasė turi turėt parameturs "color", "isDigital". Metodą "draw";
// 2. Sukurtos klasės parametrai turi būt protected tipo( pridedam zodi protected); 
export class Figure {
    protected color: string;
    protected isDigital: boolean;

    constructor (color: string, isDigital: boolean) {
        this.color = color;
        this.isDigital = isDigital;
    }

    draw() {
        console.log("draw");
    }
}