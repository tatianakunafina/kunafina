// 1)

function split(n) {
    if (n < 1000) {
        const fractional = n.toString().split('').reverse();
        let unit = fractional[0];
        let tenth = fractional[1] || '0';
        let hundredth = fractional[2] || '0';
        const result = {
            unit,
            tenth,
            hundredth,
        }

        console.log(result)
        return result
    } else {
        console.log('Введите число меньшее или равное 999!')
        return {}
    }
}

split(634)

// 2) + 3)

class Cart {
    constructor(arr) {
        this.cart = arr
    }
    cart = {}
    countCartPrice() {
        const initialValue = 0;
        const reducer = (acc, value) => acc + value.price;
        const price = cart.reduce(reducer, initialValue);
        return price;
    }
}

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    name = ''
    price = 0
}

const banana = new Product('Banana', 70)
const apple = new Product('Apple', 50)
const tomato = new Product('Tomato', 30)
const lemon = new Product('Lemon', 80)

const cart = [banana, apple, tomato, lemon];

const newCart = new Cart(cart)
console.log(newCart.countCartPrice())


