import { Triangle } from "./Triangle.js";
import { Circle } from "./Circle.js";
// 2. Sukurtos klasės parametrai turi būt protected tipo; zr Figure.ts
// 3. Sukurkit klases Triangle ir Circle; zr Triangle.ts ir Circle.ts
// 4.  Circle iš viso turi turėt parameturs "color", "isDigital", parametrą "draw"; zr Circle.ts
// 5. Triangle iš viso turi turėt parameturs "color", "isDigital", "aLength", "bLength", "cLength", bei parametrus "draw", "getArea"; (Triagle turės turėti savo kenstruktoriu bei kviesti super() ); zr Triangle.ts
// 6. Triangle sukurti "color" getterį bei setterį; zr Triangle.ts
const triangle = new Triangle("orange", true, 3, 5, 4);
console.log(triangle);
triangle.setLength(1, 2, 3);
console.log(triangle);
const circle = new Circle("orange", true);
console.log(circle);
// 7. Triangle turi turėt metodą getPerimeter;
const perimeter = triangle.getPerimeter();
console.log(perimeter);
