// 1)

// const rows = ['1', '2', '3', '4', '5', '6', '7', '8']
// const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
// const chessplate = document.getElementById('chessplate')

// rows.forEach((row, index) => {
//     const rowEl = document.createElement('div')
//     rowEl.classList.add('row')
//     chessplate.appendChild(rowEl)
//     columns.forEach((column, idx) => {
//         const columnEl = document.createElement('div')
//         let innerText = ''
//         if (idx === 0 && index === 0) innerText = `${row} ${column}`
//         else if (index === 0) innerText = column
//         else if (idx === 0) innerText = row
//         columnEl.innerText = innerText
//         columnEl.classList.add('cell')
//         if (index%2) {
//             if (idx%2) columnEl.classList.add('white')
//             else columnEl.classList.add('black')
//         } else {
//             if (idx%2) columnEl.classList.add('black')
//             else columnEl.classList.add('white')
//         }
//         rowEl.appendChild(columnEl)
//     })
    
// })

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
const pineapple = new Product('Pineapple', 150)

// CART:

const cart = [banana, apple, tomato, lemon, pineapple];
const newCart = new Cart(cart)
const getHeaderText = el => {
    const getProductText = length => {
        if (length === 1) return 'товар'
        else if (length === 2 || length === 3 || length === 4) return 'товара'
        else return 'товаров'
    }
    if (cart.length === 0) el.innerText =  'Корзина пуста'
    else el.innerText = `В корзине: ${cart.length} ${getProductText(cart.length)} на сумму ${newCart.countCartPrice()} рублей`
}

const refetchCart = node => {
    node.innerHTML = '';
    cart.forEach(p => {
        const productName = document.createElement('div')
        const productPrice = document.createElement('div')
        const removeFromCart = document.createElement('button')
    
        removeFromCart.onclick = () => {
            const removeIndex = cart.findIndex(i => i.name === p.name)
            cart.splice(removeIndex, 1)
            productTable.removeChild(productName)
            productTable.removeChild(productPrice)
            productTable.removeChild(removeFromCart)
            getHeaderText(cartHeader)
        }
        
        productName.innerText = p.name
        productPrice.innerText = p.price
        removeFromCart.innerText = 'Удалить'
        productTable.appendChild(productName)
        productTable.appendChild(productPrice)
        productTable.appendChild(removeFromCart)   
    })
}

const root = document.getElementById('chessplate')
const cartHeader = document.createElement('div')
cartHeader.classList.add('header')
getHeaderText(cartHeader)
root.appendChild(cartHeader)
const productTable = document.createElement('div')
productTable.classList.add('table')
root.appendChild(productTable)
const headerCells = ['Наименование', 'Цена', '']

headerCells.forEach(c => {
    const tableHeaderCell = document.createElement('div')
    tableHeaderCell.innerText = c
    productTable.appendChild(tableHeaderCell)
})

refetchCart(productTable)


// CATALOG:

const products = [banana, apple, tomato, lemon, pineapple];

const catalog = document.getElementById('catalog')
catalog.classList.add('table')

headerCells.forEach(c => {
    const catalogHeaderCell = document.createElement('div')
    catalogHeaderCell.innerText = c
    catalog.appendChild(catalogHeaderCell)
})

products.forEach(p => {
    const productName = document.createElement('div')
    const productPrice = document.createElement('div')
    const addToCart = document.createElement('button')

    addToCart.onclick = () => {
        cart.push(p)
        refetchCart(productTable)
        getHeaderText(cartHeader)
    }
    
    productName.innerText = p.name
    productPrice.innerText = p.price
    addToCart.innerText = 'В корзину'
    catalog.appendChild(productName)
    catalog.appendChild(productPrice)
    catalog.appendChild(addToCart)   
})