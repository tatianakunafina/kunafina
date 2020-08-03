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
    constructor(name, price, image) {
        this.name = name
        this.price = price
        this.image = image
    }
    name = ''
    price = 0
    image = ''
}

const banana = new Product('Banana', 70, ['./images/banana.png', './images/banana2.png'])
const apple = new Product('Apple', 50, ['./images/apple.png', './images/apple2.png'])
const tomato = new Product('Tomato', 30, ['./images/tomato.png', './images/tomato2.png'])
const lemon = new Product('Lemon', 80, ['./images/lemon.png', './images/lemon2.png'])
const pineapple = new Product('Pineapple', 150, ['./images/pineapple.png', './images/pineapple2.png'])

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

const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const span = document.querySelector('.close');

const refetchCart = node => {
    node.innerHTML = '';
    cart.forEach(p => {
        const productImage = document.createElement('img')
        const productName = document.createElement('div')
        const productPrice = document.createElement('div')
        const removeFromCart = document.createElement('button')
        const next = document.createElement('span')
        const previous = document.createElement('span')
        let imageState = ''

        productName.innerText = p.name
        productPrice.innerText = p.price
        removeFromCart.innerText = 'Удалить'
        next.innerText = '>'
        previous.innerText = '<'

        next.classList.add('arrow', 'next')
        previous.classList.add('arrow', 'previous')
        productImage.classList.add('image')
        productName.classList.add('productCell')
        productPrice.classList.add('productCell')
        removeFromCart.classList.add('button', 'remove')

        productImage.src = p.image[0]

        productImage.onclick = () => {
            modal.appendChild(next)
            modal.appendChild(previous)
            modal.style.display = "block";
            imageState = p.image[0]
            modalImg.src = p.image[0];
        }

        next.onclick = () => {
            const currentImageIndex = p.image.findIndex(i => i === imageState)
            const neededImagePath = currentImageIndex+2 > p.image.length ? p.image[0] : p.image[currentImageIndex+1]
            imageState = neededImagePath
            modalImg.src = neededImagePath
        }

        previous.onclick = () => {
            const currentImageIndex = p.image.findIndex(i => i === imageState)
            const neededImagePath = currentImageIndex === 0 ? p.image[p.image.length-1] : p.image[currentImageIndex-1]
            imageState = neededImagePath
            modalImg.src = neededImagePath
        }
    
        removeFromCart.onclick = () => {
            const removeIndex = cart.findIndex(i => i.name === p.name)
            cart.splice(removeIndex, 1)
            node.removeChild(productImage)
            node.removeChild(productName)
            node.removeChild(productPrice)
            node.removeChild(removeFromCart)
            getHeaderText(cartHeader)
        }
        
        node.appendChild(productImage)
        node.appendChild(productName)
        node.appendChild(productPrice)
        node.appendChild(removeFromCart)   
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

const headerCells = ['', 'Наименование', 'Цена', '']

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
    const productImage = document.createElement('img')
    const productName = document.createElement('div')
    const productPrice = document.createElement('div')
    const addToCart = document.createElement('button')
    const next = document.createElement('span')
    const previous = document.createElement('span')
    let imageState = ''

    productName.innerText = p.name
    productPrice.innerText = p.price
    addToCart.innerText = 'В корзину'
    next.innerText = '>'
    previous.innerText = '<'

    next.classList.add('arrow', 'next')
    previous.classList.add('arrow', 'previous')
    productImage.classList.add('image')
    productName.classList.add('productCell')
    productPrice.classList.add('productCell')
    addToCart.classList.add('button', 'add')

    productImage.src = p.image[0]

    productImage.onclick = () => {
        modal.style.display = "block";
        imageState = p.image[0]
        modalImg.src = p.image[0];
    }

    next.onclick = () => {
        const currentImageIndex = p.image.findIndex(i => i === imageState)
        const neededImagePath = currentImageIndex+2 > p.image.length ? p.image[0] : p.image[currentImageIndex+1]
        imageState = neededImagePath
        modalImg.src = neededImagePath
    }

    previous.onclick = () => {
        const currentImageIndex = p.image.findIndex(i => i === imageState)
        const neededImagePath = currentImageIndex === 0 ? p.image[p.image.length-1] : p.image[currentImageIndex-1]
        imageState = neededImagePath
        modalImg.src = neededImagePath
    }

    addToCart.onclick = () => {
        cart.push(p)
        refetchCart(productTable)
        getHeaderText(cartHeader)
    }
    
    catalog.appendChild(productImage)
    catalog.appendChild(productName)
    catalog.appendChild(productPrice)
    catalog.appendChild(addToCart)   
})

span.onclick = () => {
    const next = document.querySelector('.next')
    const previous = document.querySelector('.previous')
    modal.removeChild(next)
    modal.removeChild(previous)
    modal.style.display = "none";
}