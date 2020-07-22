//while

// while (condition) {
    // do something
// }

// let a = 1
// while (a < 10) {
//     console.log(a)
//     a++
// }

// let a = 0
// do {
//     console.log(a)
//     a++
// } while (a < 5)

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }    

// for in
// for of

// const arr = ['a', 'b', 'c']

// for (const idx in arr) {
//     console.log(idx)
//     console.log(arr[idx])
// }

// for (const val of arr) {
//     console.log(val)
// }

// const arr = [1,2,3] // 0 1 2
// const arr2 = []

// arr.push(1) // [1]
// arr.push(2) // [1,2]
// arr.unshift(0) // [0,1,2]

// arr.shift() // - удалится первый элемент, массив будет - [1,2]
// arr.pop() // [1]

// const matrix = [[1,2,3] [4,5,6]] - двух-мерный массив
// matrix.push([7,8,9]) - добавляем еще один элемент/строку
// matrix[0].push(11,12,13) - добавление непосредственно в определенный массив
 
// arr2.length // 0
// arr.length // 3

// if (arr.length) {
// console.log('Not empty')
// }

// const misc = ['qwerty', 1234, true, null, undefined]

// const arrInArr = [[1,2,3], [4,5,6]]

// const arr2el = arr[1]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (const v of arr) {
//     console.log(v)
// }

// arr.forEach(V => console.log(v))

// arr[1][1]

// const arr = [1,2,3,4]

// arr.forEach(function (value, index, a) {
//     console.log(value)
//     console.log(index)
//     console.log(a)

// })

function generateNumber () {
    const arr = []
    while (arr.length < 4) {
        const d = Math.floor(Math.random() * 10)
        if (arr.indexOf(d) < 0) {
            arr.push(d)
        }
    }
    return arr.join('')
}

// [1,2,3,4].join('') -> '1234' - трансформация массива в строку
 
function play () {
    const N = generateNumber() // '1234'
    console.log(N)

    let tryCounter = 0

    while (true) {
        const myAns = prompt('введите 4-х знач число ') // '1234' - число строкового типа

        let bull = 0
        let cow = 0

        if (myAns === N) {
            break
        }

        for (let i = 0; i < myAns.length; i++) {
            const symbol = myAns[i]
            const found = N.indexOf(symbol)
            if (found >= 0) {
                if (found === i) {
                    bull++
                } else {
                    cow++
                }
            }
        }    

        console.log(`${bull} bull(s) and ${cow} cow(s)`)
        
        tryCounter++
    }

    alert(`You won! ${tryCounter}`)
}

while (true) {
    play()
}

