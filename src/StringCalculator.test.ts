const add = (input: string): number => {
    if (!input) {
        return 0
    }

    if (!input.includes(',')) {
        return +input
    }

    const splitArrayWithCommon = input.split(',')
    const splitArraywithNewLine = input.split("\n")
    console.log(splitArraywithNewLine);
    
    

    let result = 0

    for (let i = 0; i < splitArrayWithCommon.length; i++) {
        result += +splitArrayWithCommon[i]
    }

    return result
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

})
