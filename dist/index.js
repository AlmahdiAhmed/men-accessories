let access = [
  {
    id: 1,
    category: "glasses",
    img: "/img/glasses/fashion-8038214_1280.jpg",
    title: "fashion sun glasses",
    about: "buy this sun glasses and enjoy the summer with good looking",
    price: 20,
  },
  {
    id: 2,
    category: "glasses",
    img: "/img/glasses/pexels-jonathan-oliveira-386410.jpg",
    title: "fashion sun glasses",
    about: "buy this sun glasses and enjoy the summer with good looking",
    price: 25,
  },
  {
    id: 3,
    category: "glasses",
    img: "/img/glasses/sunglasses-438429_1920.jpg",
    title: "fashion sun glasses",
    about: "buy this sun glasses and enjoy the summer with good looking",
    price: 15,
  },
  {
    id: 4,
    category: "hats",
    img: "/img/hats/cap-4067659_1920.jpg",
    title: "fashion sun glasses",
    about: "buy this sun glasses and enjoy the summer with good looking",
    price: 15,
  },
  {
    id: 5,
    category: "hats",
    img: "/img/hats/hat-436029_1280.jpg",
    title: "fashion sun glasses",
    about: "buy this sun glasses and enjoy the summer with good looking",
    price: 17,
  },
  {
    id: 6,
    category: "hats",
    img: "/img/hats/hats-1365962_1920.jpg",
    title: "fashion sun glasses",
    about: "buy this sun glasses and enjoy the summer with good looking",
    price: 20,
  },
  {
    id: 7,
    category: "wallets",
    img: "/img/wallets/money-1934036_1920.jpg",
    title: "fashion sun glasses",
    about: "buy this sun glasses and enjoy the summer with good looking",
    price: 40,
  },
  {
    id: 8,
    category: "wallets",
    img: "/img/wallets/wallet-1081310_1920.jpg",
    title: "fashion sun glasses",
    about: "buy this sun glasses and enjoy the summer with good looking",
    price: 30,
  },
  {
    id: 9,
    category: "wallets",
    img: "/img/wallets/wallet-2561419_1920.jpg",
    title: "fashion sun glasses",
    about: "buy this sun glasses and enjoy the summer with good looking",
    price: 35,
  },
  {
    id: 10,
    category: "watches",
    img: "/img/watches/analog-watch-1869928_1280.jpg",
    title: "fashion sun glasses",
    about: "buy this sun glasses and enjoy the summer with good looking",
    price: 50,
  },
  {
    id: 11,
    category: "watches",
    img: "/img/watches/smart-watch-821559_1920.jpg",
    title: "fashion sun glasses",
    about: "buy this sun glasses and enjoy the summer with good looking",
    price: 80,
  },
  {
    id: 12,
    category: "watches",
    img: "/img/watches/wristwatch-407096_1920.jpg",
    title: "fashion sun glasses",
    about: "buy this sun glasses and enjoy the summer with good looking",
    price: 59,
  },
];
let container = document.querySelector(".access-container");
//show items
window.addEventListener("DOMContentLoaded", () => {
  storeDisplay(access);
});

let btn = document.querySelectorAll(".btn");

//btn click
btn.forEach((b) => {
  b.addEventListener("click", (e) => {
    btn.forEach((b) => {
      b.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// displaying
function storeDisplay(storeItem) {
  let display = storeItem
    .map((item) => {
      return `
        <div class="item">
            <img src="${item.img}" alt="">
            <div class="info">
                <div class="text">
                    <h4>${item.title}</h4>
                  
                    <p>${item.about}</p>
                </div>
                <div>$  <span class="price">${item.price}</span></div>
            </div>
            <div class="add-cart">
                <i class="fa-solid fa-cart-shopping add-to-cart"></i>
            </div>
            
        </div>
        `;
    })
    .join("");
  container.innerHTML = display;
  addToCart();
}
// search
btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    const menucat = access.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
    if (category === "all") {
      storeDisplay(access);
    } else {
      storeDisplay(menucat);
    }
  });
});

//cart show and hide
let cartBtn = document.querySelector(".cart");
let cartRemove = document.querySelector(".cart-remove");
let cartBody = document.querySelector(".cart-container");
let cartContent = document.querySelector(".content-container");
let cartArr = [];
let tmp;
cartBtn.addEventListener("click", () => {
  cartBody.classList.toggle("show-cart");
});
cartRemove.addEventListener("click", () => {
  cartBody.classList.toggle("show-cart");
});
//add to cart
function addToCart() {
  let addBtn = document.querySelectorAll(".add-cart");
  addBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let element = e.target.parentElement.parentElement;
      let elementImage = element.querySelector("img").getAttribute("src");
      let elementTitle = element.querySelector(".info h4").innerText;
      let elementInfo = element.querySelector(".info p").innerText;
      let elementPrice = element.querySelector(".price").innerText;
      let cartItem = {
        img: elementImage,
        title: elementTitle,
        info: elementInfo,
        price: elementPrice,
      };
      tmp = cartItem;
      cartArr.push(tmp);
      cartDisplayText();
      increment();
      decrement();
      totalDecrease();
    });
  });
}

// let cartHtml = ''
// for(let i = 0; i < cartArr.length; i++) {
//     cartHtml = `
//     <div class="item">
//         <img src="${cartArr[i].img}" alt="">
//         <div class="info">
//             <h4>${cartArr[i].title}</h4>
//             <p>${cartArr[i].about}</p>
//         </div>
//     </div>
//     `

// }
// cartContent.innerHTML += cartHtml
// })

function cartDisplayText() {
  let cartDisplay = cartArr
    .map((cart) => {
      return `
                <div class="item">
                    <img src="${cart.img}" alt="">
                    <div class="info">
                        <h4>${cart.title}</h4>
                        <p>${cart.info}</p>
                        <div>$  <span class="price">${cart.price}</span></div>
                        <span class="remove">remove</span>
                    </div>       
                </div>
                `;
    })
    .join("");

  cartContent.innerHTML = cartDisplay;
}

let count = document.querySelector(".count");
let number = 0;
let numberPlace = document.querySelector(".number");
function increment() {
  number++;
  count.innerHTML = number;
  numberPlace.innerHTML = number;
  getTotal();
  displayTotal();
}

//remove

function decrement() {
  let removeBtns = document.querySelectorAll(".remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
      cartArr.splice(e.target.parentElement.parentElement, 1);
      number--;
      count.innerHTML = number;
      numberPlace.innerHTML = number;
    });
  });
}
let total;
let price = 0;
let priceArr;
let priceTotal;
function getTotal() {
  priceArr = [];
  total = document.querySelector(".total");
  for (let i = 0; i < cartArr.length; i++) {
    price = +cartArr[i].price;
    priceArr.push(price);
  }
  console.log(priceArr);
}
function displayTotal() {
  price = 0;
  priceArr.forEach((num) => {
    price += num;
  });
  total.innerHTML = price;
}
function totalDecrease() {
  let removeBtns = document.querySelectorAll(".remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
      priceArr.splice(e.target.parentElement.parentElement, 1);
      console.log(priceArr);
      console.log("remove");
      displayTotal();
    });
  });
}
