const add = (input: string): number => {
    if (!input) {
        return 0
    }

    return +input

}

describe('StringCalculator', () => {

    it('empty input', () => {
        expect(add('')).toBe(0)
    })

    it('input=1', () => {
        expect(add('1')).toBe(1)
    })

})
