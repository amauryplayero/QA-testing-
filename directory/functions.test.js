const functions = require('./functions')

// test('should return 2', ()=>{
// expect(functions.returnTwo()).toBe(2)
// })

// test('greeting', ()=>{
//     expect()
// })

// test('greeting', ()=>{
//     expect(functions.greeting('James')).toBe('Hello, James')
// })

// test('add', ()=>{
//     expect(functions.add(5,9)).toBe(14)

// })

describe('Math functions', ()=>{
    test('run add',()=>{
        expect(functions.add(1,2)).toBe(3)
    })
    test('subtract',()=>{
        expect(functions.subtract(2,1)).toBe(1)
    })
    test('multiply',()=>{
        expect(functions.multiply(1,2)).toBe(2)
    })
    test('divide',()=>{
        expect(functions.divide(2,1)).toBe(2)
    })
})



