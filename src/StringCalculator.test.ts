const add = (input: string): number => {
    if (!input) {
        return 0
    }

    if (input === '1') {
        return +input
    }

    const splitArray =  input.split(',')
    return +splitArray[0] + +splitArray[1]
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
})
