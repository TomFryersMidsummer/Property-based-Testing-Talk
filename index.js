export function sum(xs) {
    return xs.reduce((a, b) => a + b, 0);
}

export function quickSort(xs) {
    if (xs.length === 0) {
        return [];
    }
    const pivot = xs[0];
    let smaller = xs.slice(1).filter((x) => x <= pivot);
    let larger = xs.slice(1).filter((x) => x > pivot);
    return [...quickSort(smaller), pivot, ...quickSort(larger)];
}

export function roundOrientation(orientation) {
    orientation = (orientation + 360) % 360;
    const yKeys = Array.from(Array(16).keys())
        .map((x) => (x - 7) * 22.5)
        .map((x) => (x + 360) % 360);
    const closestOrientation = (prev, curr) => {
        return Math.abs(curr - orientation) < Math.abs(prev - orientation) ?
                curr
            :   prev;
    };
    return yKeys.reduce(closestOrientation);
}

export function cartesianProduct(a) {
    return a.reduce(
        (a, b) => a.flatMap((d) => b.map((e) => [...d, e].flat())),
        [[]],
    );
}
