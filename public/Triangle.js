import { Figure } from "./Figure.js";
// 3. Sukurkit klases Triangle ir Circle;
// 5. Triangle iš viso turi turėt parameturs "color", "isDigital", "aLength", "bLength", "cLength", bei parametrus "draw", "getArea"; (Triagle turės turėti savo kenstruktoriu bei kviesti super() );
export class Triangle extends Figure {
    constructor(color, isDigital, aLength, bLength, cLength) {
        super(color, isDigital);
        this.aLength = aLength;
        this.bLength = bLength;
        this.cLength = cLength;
    }
    draw() {
        console.log("draw");
    }
    // 7. Triangle turi turėt metodą getPerimeter;
    getPerimeter() {
        const perimeter = this.aLength + this.bLength + this.cLength;
        return perimeter;
    }
    ;
    // 6. Triangle sukurti "color" getterį bei setterį;
    getLength() {
        return `A length: ${this.aLength}, B length: ${this.bLength}, C length: ${this.cLength}`;
    }
    setLength(aLength, bLength, cLength) {
        this.aLength = aLength;
        this.bLength = bLength;
        this.cLength = cLength;
    }
}
