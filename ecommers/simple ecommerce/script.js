
const products=[
{name:'MacBook Pro',price:1999},
{name:'Mechanical Keyboard',price:129},
{name:'4K Monitor',price:399},
{name:'Wireless Mouse',price:49},
{name:'USB-C Dock',price:89},
{name:'Headphones',price:249},
{name:'Webcam',price:79},
{name:'Portable SSD',price:119}
];

const cart=[];
const productsDiv=document.getElementById('products');

products.forEach(product=>{
const card=document.createElement('div');
card.className='card';
card.innerHTML=`
<h3>${product.name}</h3>
<p class="price">$${product.price}</p>
<button>Add to Cart</button>
`;
card.querySelector('button').onclick=()=>{
cart.push(product);
renderCart();
};
productsDiv.appendChild(card);
});

function renderCart(){
const list=document.getElementById('cartItems');
list.innerHTML='';
let total=0;

cart.forEach(item=>{
const li=document.createElement('li');
li.textContent=`${item.name} - $${item.price}`;
list.appendChild(li);
total+=item.price;
});

document.getElementById('total').textContent=total.toFixed(2);
}
