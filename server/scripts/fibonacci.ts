// npm install -g typescript
// tsc fibonacci.ts
// ~ the above command will generate a fibonacci.js
// .ts file more helpful in intellisence

interface FibonacciData {
    x: number,
    y: number
}

export function getSequence(data: FibonacciData, total?: number): number[] {
    let sum: number = data.x + data.y
    let x = total ? total-1 : 9
    let sequence: number[] = []

    sequence.push(data.x)
    sequence.push(data.y)

    for (let i = 1; i < x; i++) {
        sequence.push(sum)
        sum = sequence[i] + sequence[i+1]
    }

    return sequence
}