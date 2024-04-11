let productsContainer = document.querySelector('.products-container')
const input = document.querySelector('.input-form')
const searchInput= document.querySelector('.search-input')

let filteredProduct = [...products]
// console.log(filteredProduct);

function display(){

    if(filteredProduct.length < 1){
        productsContainer.innerHTML=`<h6>Sorry, no match found</h6>`
        return
    }
    

    productsContainer.innerHTML = filteredProduct.map((product)=>{
        const {id,image,title,price} = product
        // console.log(id,image,title,price);
        return `<article class="product" data-id="${id}">
        <img
          src="${image}"
          class="product-img img"
          alt=""
        />
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>`
    }).join('')
}
display()

input.addEventListener('keyup',()=>{
    let inputValue = searchInput.value
    filteredProduct = products.filter((product)=>{
        return product.title.toLowerCase().includes(inputValue)

    })
    display()
})


// Filter Buttons

const companiesDOM = document.querySelector('.companies');

const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];
  // console.log(buttons);
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join('');
};

displayButtons();

companiesDOM.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filteredProduct = [...products];
    } else {
      filteredProduct = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = '';
    display();
  }
});


// console.log();
// let num = new Set(1,2,3,4,5)
// console.log(num);
const num = [1,2,3,4,3,4,6,8,5]
let uniqValue = new Set(num)
console.log(num,uniqValue);