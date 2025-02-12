import { sum, quickSort, cartesianProduct } from "./index.js";
import fc from "fast-check";

describe("sum", () => {
    test("2 + 2 = 4", () => {
        expect(sum([2, 2])).toEqual(4);
    });

    test("5 + 5 + 5 = 15", () => {
        expect(sum([5, 5, 5])).toEqual(15);
    });

    // test("empty sum", () => {
    //     expect(sum([])).toEqual(0);
    // });

    test("", () => {
        fc.assert(
            fc.property(fc.array(fc.nat()), fc.array(fc.nat()), (a, b) => {
                expect(sum(a.concat(b))).toEqual(sum(a) + sum(b));
            }),
        );
    });
});

describe("sort", () => {
    test("sort sorts things", () => {
        fc.assert(
            fc.property(fc.array(fc.nat()), (a) => {
                const sorted = quickSort(a);
                return sorted.reduce((a, b) => a <= b, true);
            }),
        );
    });

    test("sort doesn't delete half your stuff", () => {
        fc.assert(
            fc.property(fc.array(fc.nat()), (a) => {
                const sorted = quickSort(a);
                expect(sorted.length).toEqual(a.length);
            }),
        );
    });
});

describe("cartesian product", () => {
    test("example", () => {
        expect(
            cartesianProduct([
                [1, 2, 3],
                [1, 2],
            ]),
        ).toEqual([
            [1, 1],
            [1, 2],
            [2, 1],
            [2, 2],
            [3, 1],
            [3, 2],
        ]);
    });

    test("length", () => {
        fc.assert(
            fc.property(
                fc.array(fc.array(fc.nat(), { maxLength: 4 }), {
                    maxLength: 3,
                }),
                (a) => {
                    expect(cartesianProduct(a).length).toEqual(
                        a.reduce((a, b) => a * b.length, 1),
                    );
                },
            ),
        );
    });

    test("single on arrays", () => {
        fc.assert(
            fc.property(fc.array(fc.anything(), { maxLength: 4 }), (a) => {
                expect(cartesianProduct([a])).toEqual(a.map((x) => [x]));
            }),
        );
    });
});
