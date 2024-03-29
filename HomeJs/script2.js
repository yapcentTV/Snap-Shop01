let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Calvin Klein Kids Set',
        image: '1.PNG',
        price: 20999
    },
    {
        id: 2,
        name: 'Iphone 15 Pro Max 1Tb',
        image: '2.PNG',
        price: 97000
    },
    {
        id: 3,
        name: 'Hawk New Gen Bag',
        image: '3.PNG',
        price: 3999
    },
    {
        id: 4,
        name: 'Whirpool Waching Machine',
        image: '4.PNG',
        price: 44999
    },
    {
        id: 5,
        name: 'Electric Blower',
        image: '5.PNG',
        price: 34399
    },
    {
        id: 6,
        name: 'Kitchen Utensils 35Sets',
        image: '6.PNG',
        price: 18999
    },
    {
        id: 7,
        name: 'Hair Blower',
        image: '7.PNG',
        price: 12399
    },
    {
        id: 8,
        name: 'Samsung Galaxy S23 Ultra',
        image: '8.PNG',
        price: 98999
    },
    {
        id: 9,
        name: 'MacBook Air M1 Chip',
        image: '9.PNG',
        price: 111999
    },
    {
        id: 10,
        name: 'Fujidenzo Refrigerator',
        image: '10.PNG',
        price: 10999
    },
    {
        id: 11,
        name: 'Belo Facial Whithening',
        image: '11.PNG',
        price: 1299
    },
    {
        id: 12,
        name: 'Calvin Klein Shirt',
        image: '12.PNG',
        price: 999
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">₱ ${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
       
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>₱ ${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}