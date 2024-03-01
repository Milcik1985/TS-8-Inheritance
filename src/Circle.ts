// 3. Sukurkit klases Triangle ir Circle;

import { Figure } from "./Figure.js";

// 4.  Circle iš viso turi turėt parameturs "color", "isDigital", parametrą "draw";
export class Circle extends Figure{

    draw() {
        console.log("draw");
    }
};