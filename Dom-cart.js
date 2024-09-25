const CART__ITEMS__CONTAINER = document.getElementById(
  "cart__items__container"
);
console.log(CART__ITEMS__CONTAINER);
const LIST__ITEMS = document.getElementById("item1");
console.log(LIST__ITEMS);

const DISPLAY__CART__TOTAL = document.getElementById("display__cart__total");
console.log(DISPLAY__CART__TOTAL);

const CHECKOUT__BTN = document.getElementById("check__out__btn");

let cartItems = [
  {
    productID: "item1",
    productImage:
      "https://th.bing.com/th/id/OIP.-TFZkn4-Co9EgKsR5ANyXQHaEK?w=304&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "Iphone",
    productPrice: 85000.0,
    productQuantity: 1,
    heart: false,
  },
  {
    productID: "item2",
    productImage:
      "https://th.bing.com/th/id/OIP.5HqNyjoDCrMeqgzM3wfpigHaFP?w=214&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "DOLCE&G",
    productPrice: 35000.0,
    productQuantity: 1,
    heart: false,
  },
  {
    productID: "item3",
    productImage:
      "https://th.bing.com/th/id/OIP.5twZ3DZEapFLGXk6yYoKwAHaHa?w=166&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "Ipad",
    productPrice: 65000.0,
    productQuantity: 1,
    heart: false,
  },
  {
    productID: "item4",
    productImage:
      "https://th.bing.com/th/id/OIP.3NDwoniyWc911BwmskYIKwHaE8?w=302&h=201&c=7&r=0&o=5&pid=1.7",
    productName: "Androids",
    productPrice: 20000.0,
    productQuantity: 1,
    heart: false,
  },
];
let totalCostOfItemsInCart;
// function for cart items display
function displayCartItems() {
  CART__ITEMS__CONTAINER.innerHTML = cartItems
    .map((item) => {
      const {
        productID,
        productImage,
        productName,
        productPrice,
        productQuantity,
        heart,
      } = item;
      return `<main>
      <div class="cart-list">
      <div class="items">
      <div class="product_image_container"><img class="cart-item-1"
    src="${productImage}" alt="images" />
    <div>    <h3 class="name">${productName}</h3>
    <button onclick="removeItem('${productID}')"class="btn1" >Delete</button>

    </div>
    </div>
    
  
    <div class="info">
    <div class="priceselect">
    <p class="price">&#8358;${productPrice}</p>
    <div class="rate">
    <button class="plus-btn" onclick=increaseQuantity('${productID}')>+</button>
    <button class="quantity">${productQuantity}</button>
    <button class="minus-btn" onclick=decreaseQuantity('${productID}')>-</button>
    </div>
    <span onclick=addToHeart('${productID}') class="heart">
    ${
      heart === true
        ? '<i class="fa-solid fa-heart" style="color:#e10935;"></i>'
        : '<i class="fa-regular fa-heart" style="color:#000000;"></i>'
    }
    </span>
    
    </div>
</div>
    </div>
    </main> `;
    })
    .join("");
}
displayCartItems();

function increaseQuantity(productID) {
  cartItems.forEach((item) => {
    if (item.productID === productID) {
      item.productQuantity = item.productQuantity + 1;
    }
  });
  displayCartItems();
  calculateTotalCost();
}

function decreaseQuantity(productID) {
  cartItems.forEach((item) => {
    if (item.productQuantity === 1) {
      return;
    }
    if (item.productID === productID) {
      item.productQuantity = item.productQuantity - 1;
    }
  });
  displayCartItems();
  calculateTotalCost();
}
function removeItem(productID) {
  cartItems = cartItems.filter((item) => item.productID !== productID);
  displayCartItems();
  calculateTotalCost();
  return cartItems;
}

function addToHeart(id) {
  cartItems.forEach((item) => {
    if (item.productID === id && item.heart === false) {
      item.heart = true;
    } else if (item.productID === id && item.heart === true) {
      item.heart = false;
    }
  });
  displayCartItems();
}
function calculateTotalCost() {
  totalCostOfItemsInCart = cartItems.reduce((total, value) => {
    return total + value.productPrice * value.productQuantity;
  }, 0);
  DISPLAY__CART__TOTAL.textContent = totalCostOfItemsInCart;
}
calculateTotalCost();

// function for checkout button
CHECKOUT__BTN.addEventListener("click", proceedToCheck);
function proceedToCheck() {
  console.log(cartItems, totalCostOfItemsInCart);
}
