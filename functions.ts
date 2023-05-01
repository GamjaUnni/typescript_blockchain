/* Call Signatures */
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
console.log(add(1, 2));

/* Overloading - 함수가 서로 다른 여러개의 call signiture를 가지고 있을 때 발생시킨다. */
type Add2 = {
    (a: number, b: number): number;
    (a: number, b: string): number;
};

const add2: Add2 = (a, b) => {
    if (typeof b === "string") return a;
    return a + b;
};

/////////////////////////////////////////

type Config = {
    path: string;
    state: object;
};

type Push = {
    (path: string): void;
    (config: Config): void;
};

const push: Push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    } else {
        console.log(config.path);
    }
};

/////////////////////////////////////////

type Add3 = {
    (a: number, b: number): number;
    (a: number, b: number, c: number): number;
};

// c는 추가 파라미터 옵션이므로 추가적으로 타입을 줘야하고,
// 이 파라미터는 선택사항이라는 것을 알려줘야 한다.
const add3: Add3 = (a, b, c?: number) => {
    if (c) return a + b + c;
    return a + b;
};
console.log(add3(1, 2));
console.log(add3(1, 2, 3));

/* Polymorphism - 다형성 */
type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder; // generic
    // (arr: number[]): void;
    // (arr: boolean[]): void;
    // (arr: string[]): void;
    // (arr: (number | boolean)[]): void; // 모든 가능성을 다 조합해서 만들어야 하기 때문에 별로 좋지 않은 방법
};
const superPrint: SuperPrint = (arr) => arr[0];

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]);

/* Generics Recap */
type SuperPrint2 = { <T, M>(a: T[], b: M): T };
const superPrint2: SuperPrint2 = (arr) => arr[0];

superPrint2([1, 2, 3, 4], "x");
superPrint2([true, false, true], 1);
superPrint2(["a", "b", "c"], false);
superPrint2([1, 2, true, false], []);

/* Conclusions */
