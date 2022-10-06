const add = (input: string): number => {
    if (!input) {
        return 0
    }

    if (!input.includes(',')) {
        return +input
    }
    input.split(',')

    const splitArrayWithNewLine = input.split("\n").join().split(",")
    console.log(splitArrayWithNewLine)

    const splitArrayWithSlashes = input.split('//')
    console.log(splitArrayWithSlashes)

    let result = 0

    for (let i = 0; i < splitArrayWithNewLine.length; i++) {
        result += +splitArrayWithNewLine[i]
    }

    // return result
}

describe('StringCalculator', () => {

    it('empty input', () => {
        expect(add('')).toBe(0)
    })

    it('input=1', () => {
        expect(add('1')).toBe(1)
    })

    it('two inputs', () => {
        expect(add('2,5')).toBe(7)
    })

    it('input=25', () => {
        expect(add('25')).toBe(25)
    })

    it('many numbers', () => {
        expect(add('1,2,3,4,5,6')).toBe(21)
    })

    it('many numbers with \n', () => {
        expect(add('1\n2,3,4,5,6')).toBe(21)
    })

    it('custom delimiter', () => {
        expect(add('//;\n;2;3;5')).toBe(10)
    })

})
